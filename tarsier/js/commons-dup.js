/* Shared helper: detect whether a source image is already on Wikimedia Commons.
 * Two strategies, identifier first (cheap, resolution-independent), SHA-1 as a fallback
 * (definitive for byte-identical files; needs a CORS-readable image host). */
(function (global) {
  "use strict";
  var API = "https://commons.wikimedia.org/w/api.php";
  var cache = {}; // imgUrl -> Promise<result> (dedupe repeated checks)

  // A stable source identifier we can grep Commons wikitext for. Extend as more hosts gain IDs.
  function identifier(url) {
    if (!url) return null;
    var m = url.match(/inaturalist[^/]*\.(?:s3\.amazonaws\.com|org)\/photos\/(\d+)/i) ||
            url.match(/static\.inaturalist\.org\/photos\/(\d+)/i);
    if (m) return { search: 'insource:"photos/' + m[1] + '"', id: m[1] };
    return null;
  }

  function searchInsource(q) {
    return fetch(API + "?action=query&list=search&srnamespace=6&srlimit=1&format=json&origin=*" +
      "&srsearch=" + encodeURIComponent(q))
      .then(function (r) { return r.json(); })
      .then(function (d) { var s = (d.query && d.query.search) || []; return s.length ? s[0].title : null; });
  }

  function sha1Hex(buf) {
    return crypto.subtle.digest("SHA-1", buf).then(function (h) {
      return Array.prototype.map.call(new Uint8Array(h), function (b) {
        return ("0" + b.toString(16)).slice(-2);
      }).join("");
    });
  }

  function bySha1(imgUrl) {
    return fetch(imgUrl).then(function (r) { if (!r.ok) throw new Error("img"); return r.arrayBuffer(); })
      .then(sha1Hex)
      .then(function (hex) {
        return fetch(API + "?action=query&list=allimages&aisha1=" + hex + "&format=json&origin=*")
          .then(function (r) { return r.json(); })
          .then(function (d) { var a = (d.query && d.query.allimages) || []; return a.length ? a[0].title : null; });
      });
  }

  // Resolve to { onCommons, title, via: 'id'|'sha1'|null }. Set opts.sha1 to allow the
  // byte-hash fallback (downloads the image, so use it for single images, not whole galleries).
  function check(imgUrl, opts) {
    opts = opts || {};
    var key = imgUrl + (opts.sha1 ? "|sha1" : "");
    if (cache[key]) return cache[key];
    var idf = identifier(imgUrl);
    var p = (idf ? searchInsource(idf.search) : Promise.resolve(null))
      .then(function (title) {
        if (title) return { onCommons: true, title: title, via: "id" };
        if (opts.sha1) return bySha1(imgUrl).then(function (t) {
          return t ? { onCommons: true, title: t, via: "sha1" } : { onCommons: false, title: null, via: null };
        });
        return { onCommons: false, title: null, via: null };
      })
      .catch(function () { return { onCommons: false, title: null, via: null, error: true }; });
    cache[key] = p;
    return p;
  }

  function fileUrl(title) {
    return "https://commons.wikimedia.org/wiki/" + encodeURIComponent(title.replace(/ /g, "_"));
  }

  global.CommonsDup = { check: check, identifier: identifier, fileUrl: fileUrl };
})(window);
