<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Book",
  "inLanguage": "en-US",
  "name": "N4MA Demonstrator",
  "publisher": {
    "@type": "Organization",
    "name": "GitHub"
  },
  "copyrightYear": "2022",
  "discussionUrl": "https://github.com/German-BioImaging/dtqueries/issues"
}
</script>

# ΔTissue Demonstrator (v0.0.4)

© 2022 Andra Waagmeester and Josh Moore

License: [<img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png" width="10%">](https://creativecommons.org/licenses/by-sa/4.0/)

## Introduction

<img src="{{site.baseurl}}/images/cloud.png" width="50%"/>

This is the first release of the N4MA Demonstrator which provides starting points for the exploration of public, linked data.
Linked data is core to FAIR data sharing and is a key component of the FAIR data model. In this release
we use Wikidata as a central hub for linked data related to the ΔTissue disease areas (Cultivars, Publications records, Climate Change).

Resources that are reachable via data links include:

* ....

Other sites like [Scholia](https://scholia.toolforge.org/) provide enhanced
visualization of the existing data links, like the image above showing the topics
of all ΔTissue authors who could be found in Wikidata.

For the purpose of this demonstrator two workflows have been developed:

1. complete publication records for a list of authors and publications
2. make biological pathways published in the scientific literature machine readable (TODO)

and used to create some, non-systematic entries in Wikidata and other resources
to establish initial links.

The demonstrator, however, is a POC to explore existing linked data on the N4MA areas in Wikidata.
Currently, the coverage of Wikidata on the N4MA areas appears to be incomplete.
Relevant data either needs to be added systematically or the existing data needs to be updated, keeping in mind that
Wikidata follows applies a CC0 license. Many resources do not. To be able to render a full picture of
the linked data cloud related to the disease areas, either more public data must be added or a linked-data
resource that hosts non-CC0 data will be needed.

## Contents

<ol>
  <li><a href="pubrecord.html">Publication Record</a>
    <ol>
{% for rec in site.data.pubrecord %}
   <li><a href="pubrecord.html#{{rec.name | slugify }}">{{ rec.name  }}</a></li>
{% endfor %}
    </ol>
  </li>
  <li><a href="cultivars.html">Triple-negative breast record</a>
    <ol>
{% for rec in site.data.tnbc %}
   <li><a href="cultivars.html#{{rec.name | slugify }}">{{ rec.name  }}</a></li>
{% endfor %}
    </ol>
  </li>
{% endfor %}
</ol>

## Future work

Future editions of this demonstrator will include:
* Direct linked-data validation and enrichment using [Shape Expressions](https://shex.io)
* Federated querying of linked data where the data is hosted on multiple sources.
* Direct download of linked data from the sources.
* Example queries on a revived linked-tcga SPARQL endpoints. 

## Impressum

This demonstration is written in Markdown with additional instructions consisting of
[SPARQL queries](https://en.wikipedia.org/wiki/SPARQL) that are dynamically loaded from https://www.wikidata.org/.
While the website itself is licensed under CC-BY-SA, all SPARQL queries in this resource can be used
under the [CCZero license/waiver](https://creativecommons.org/share-your-work/public-domain/cc0/).
Feedback can be sent via [this GitHub repository](https://github.com/German-BioImaging/dtqueries/).
