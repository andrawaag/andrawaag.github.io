/* Atlas of Living Australia images: GBIF hands out a redirecting proxy/thumbnail URL on
 * images.ala.org.au. Commons upload-by-URL does not follow redirects, so resolve the image id
 * to the canonical full-size file on the direct storage host (and pull ALA's license/attribution,
 * which is often richer than GBIF's) via ALA's CORS-enabled image API. */
(function (global) {
  "use strict";
  var WS = "https://images.ala.org.au/ws/image/";
  var STORE_HOST = "images-assets.ala.org.au"; // direct, non-redirecting storage host

  function imageId(url) {
    if (!/\.ala\.org\.au/i.test(url || "")) return null;
    var m = String(url).match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
    return m ? m[0] : null;
  }

  // Resolve to { url, license, creator, rightsHolder, title, mimeType } or null if not an ALA image.
  function resolve(url) {
    var id = imageId(url);
    if (!id) return Promise.resolve(null);
    return fetch(WS + id, { headers: { Accept: "application/json" } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || !d.imageUrl) return null;
        var direct = d.imageUrl.replace(/:\/\/images\.ala\.org\.au\//i, "://" + STORE_HOST + "/");
        var lic = (d.recognisedLicence && d.recognisedLicence.url) || d.license || "";
        return { url: direct, license: lic, creator: d.creator || "",
                 rightsHolder: d.rightsHolder || "", title: d.title || "", mimeType: d.mimeType || "" };
      })
      .catch(function () { return null; });
  }

  global.AlaImages = { resolve: resolve, imageId: imageId };
})(window);
