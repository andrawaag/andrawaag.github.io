# Tarsier — find reusable images of taxa

Tarsier finds openly-licensed (CC0, CC-BY, CC-BY-SA) images of any organism — from
[GBIF](https://gbif.org) occurrences and from the taxonomic literature ([Plazi](https://plazi.org)
figures via the Biodiversity Literature Repository on Zenodo) — and helps you reuse them, including
a one-click pre-filled upload to [Wikimedia Commons](https://commons.wikimedia.org).

**Live:** https://andrawaag.github.io/tarsier/

## Using Tarsier

1. Go to [andrawaag.github.io/tarsier](https://andrawaag.github.io/tarsier).
2. Type a **scientific name** (e.g. *Euphorbia neriifolia*) or a **common name** (e.g. *lion*) and
   press **Search**. Common names are resolved to a taxon via [Wikidata](https://www.wikidata.org).
   You can also deep-link a search: `?name=Euphorbia neriifolia` or `?qid=Q2161999`.
3. Browse the **gallery**. Each image shows its own licence; images that are reusable
   (CC0 / CC-BY / CC-BY-SA) have an **Upload to Commons** button. Images that already exist on
   Commons are flagged ("on Commons") and their upload is disabled to avoid duplicates.
   - Tick **Include non-reusable images** to also see CC-BY-NC / all-rights-reserved images.
   - Tick **Also search taxonomic literature figures (Plazi / BLR)** to add figures from the
     literature that GBIF does not expose.
4. Click an image to open its **detail page**: licence, source, whether the image's host is an
   [approved Commons upload domain](approved-domains.html) (with a one-click *propose it* flow if
   not), and a link to the taxon's Wikidata item.
5. Click **Upload to Wikimedia Commons** — it opens a Commons `Special:Upload` form pre-filled with
   the description, licence, source, attribution and the Wikidata item (`[[:d:Q…]]`). A Wikimedia
   account is required. Submit at the bottom of that page.
   - Upload-by-URL only succeeds from domains on the Commons allow-list; the detail page tells you
     whether the source qualifies and how to propose it if it doesn't.

## What it does under the hood

- Searches GBIF by scientific **or** common name (the latter via Wikidata `P225`).
- Judges reusability on each **image's own licence**, not just the record licence, and surfaces
  open images that GBIF can only see at the record level (a background image-level scan).
- Detects images **already on Commons** (source-link + SHA-1 match) and disables their re-upload.
- Checks each image's host against the live Commons copy-upload allow-list and offers a pre-filled
  request to add unlisted domains.
- Resolves redirecting Atlas of Living Australia image URLs to the direct file.
- Flags taxa whose Wikidata item has **no image (`P18`)** and, when a copy is on Commons, offers a
  one-click QuickStatements link to set it.

## Contributing

Issues and pull requests are welcome on the
[issue tracker](https://github.com/andrawaag/andrawaag.github.io/issues). I hope this grows into a
community effort — contributions and improvements are more than welcome.

Made by Andra Waagmeester for [WikiProject Biodiversity](https://www.wikidata.org/wiki/Wikidata:WikiProject_Biodiversity).
