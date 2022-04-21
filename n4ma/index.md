<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Book",
  "inLanguage": "en-US",
  "name": "n4ma_concept Demonstrator",
  "publisher": {
    "@type": "Organization",
    "name": "GitHub"
  },
  "copyrightYear": "2022",
}
</script>

# N4ma_concept Demonstrator (v0.0.1)

© 2022 Andra Waagmeester and Josh Moore

License: [<img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png" width="10%">](https://creativecommons.org/licenses/by-sa/4.0/)

## Introduction

<img src="{{site.baseurl}}/images/cloud.png" width="50%"/>

This is the first release of the n4ma_concept Demonstrator which provides starting points for the exploration of public, linked data.
Linked data is core to FAIR data sharing and is a key component of the FAIR data model. In this release
we use Wikidata as a central hub for linked data related to the n4ma_concept areas (Cultivars, publications, climate change).

Finally, other sites like [Scholia](https://scholia.toolforge.org/) provide enhanced
visualization of the existing data links, like the image above showing the topics
of all ΔTissue authors who could be found in Wikidata.

For the purpose of this demonstrator workflows have been developed:

1. to complete publication records for a list of authors and publications
2. to make biological pathways published in the scientific literature machine readable

In some cases, entries have been created in Wikidata and elsewhere in order to establish initial links.
This, however, has not been done systematically without the input of the domain experts.

The demonstrator is a POC to explore existing linked data on the n4ma_concept disease areas in Wikidata.
Currently, the coverage of Wikidata on the ΔTissue disease areas appears to be incomplete.
Relevant data either needs to be added systematically or the existing data needs to be updated, keeping in mind that
Wikidata follows applies a CC0 license. Many resources do not. To be able to render a full picture of
the linked data cloud related to the disease areas, either more public data must be added or a linked-data
resource that hosts non-CC0 data will be needed.

Please note that the queries in this repository were written by the authors who are not domain experts in the different research areas.

## Contents

<ol>
  <li><a href="pubrecord.html">Publication Records</a>
    <ol>
{% for rec in site.data.pubrecord %}
   <li><a href="pubrecord.html#{{rec.name | slugify }}">{{ rec.name  }}</a></li>
{% endfor %}
    </ol>
  </li>
  <li><a href="cultivars.html">Cultivars</a>
    <ol>
{% for rec in site.data.tnbc %}
   <li><a href="cultivars.html#{{rec.name | slugify }}">{{ rec.name  }}</a></li>
{% endfor %}
    </ol>
  </li>
  <li><a href="climate_change.html">Glioblastoma</a>
    <ol>
{% for rec in site.data.glioblastoma%}
   <li><a href="climate_change.html#{{rec.name | slugify }}">{{ rec.name  }}</a></li>
{% endfor %}
    </ol>
  </li>
  <li><a href="data.html">Data Resources</a>
    <ol>
   <li><a href="data.html#tcga">TCGA</a></li>
    </ol>
    <ol>
   <li><a href="data.html#sfaira">sfaira</a></li>
    </ol>
  </li>
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
