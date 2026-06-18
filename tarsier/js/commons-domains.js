/* Shared helper: check a host against Wikimedia Commons' live copy-upload allow-list
 * (MediaWiki:Copyupload-allowed-domains). Fetched once via the CORS-enabled API and cached. */
(function (global) {
  "use strict";

  var LIST_URL = "https://commons.wikimedia.org/w/api.php?action=query&prop=revisions" +
    "&titles=MediaWiki:Copyupload-allowed-domains&rvprop=content&rvslots=main" +
    "&format=json&formatversion=2&origin=*";

  var cache = null; // Promise<string[]> of domain patterns

  function hostOf(value) {
    value = (value || "").trim();
    if (!value) return "";
    try { return new URL(value.indexOf("//") > -1 ? value : "https://" + value).hostname.toLowerCase(); }
    catch (e) { return value.replace(/^.*?:\/\//, "").split("/")[0].toLowerCase(); }
  }

  function loadList() {
    if (cache) return cache;
    cache = fetch(LIST_URL)
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (d) {
        var pages = d.query && d.query.pages;
        var txt = pages && pages[0] && pages[0].revisions &&
          pages[0].revisions[0].slots.main.content || "";
        return txt.split("\n").map(function (line) {
          return line.replace(/#.*/, "").trim();      // strip inline comments
        }).filter(function (l) {
          return l && l.charAt(0) !== "<";             // drop blanks and <syntaxhighlight>
        });
      })
      .catch(function (e) { cache = null; throw e; }); // allow retry on failure
    return cache;
  }

  // A pattern's "*" matches exactly one DNS label; a leading "*." also matches the bare apex.
  function matches(host, pattern) {
    pattern = pattern.toLowerCase();
    if (host === pattern) return true;
    if (pattern.indexOf("*.") === 0 && host === pattern.slice(2)) return true;
    var rx = "^" + pattern.split("*").map(function (s) {
      return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    }).join("[^.]+") + "$";
    try { return new RegExp(rx).test(host); } catch (e) { return false; }
  }

  // Resolve to { match: <pattern|null> } or { error: true } if the list can't be loaded.
  function check(host) {
    return loadList().then(function (list) {
      var hit = null;
      list.some(function (p) { if (matches(host, p)) { hit = p; return true; } return false; });
      return { match: hit };
    }).catch(function () { return { error: true }; });
  }

  global.CommonsDomains = { hostOf: hostOf, check: check, matches: matches };
})(window);
