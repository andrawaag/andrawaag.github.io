---
title: Data Resources
datatable: true
---

## Contents:

<ol>
  <li><a href="#tcga">TCGA</a></li>
  <li><a href="#sfaira">sfaira</a></li>
</ol>

<br/>

----

<br/>

## TCGA

The following cases from https://portal.gdc.cancer.gov/ have been identified
as TNBC by downloading the `nationwidechildrens.org_clinical_patient_brca.txt` file
associated with the data and checking for a value of `Negative` in the
'er_status_by_ihc', 'pr_status_by_ihc', and 'her2_status_by_ihc' columns. (See
https://www.biostars.org/p/279048/ for details)

<table class="display">
    <thead>
        <tr>
        <th>TCGA Case</th>
        <th>High-impact somatic mutations</th>
        <th>Images available</th>
        </tr>
    </thead>
    <tbody>
{% for rec in site.data.tcga %}
        <tr>
            <td><a href="https://portal.gdc.cancer.gov/cases/{{ rec.case }}">{{rec.case}}</a></td>
            <td>{% for gene in rec.genes%}
                {{gene["symbol"]}} {% unless forloop.last %},{% endunless %}
                {% endfor %}
            </td>
            <td>
                {% if rec.slides %}
                <a href="https://portal.gdc.cancer.gov/repository?filters=%7B%22content%22%3A%5B%7B%22content%22%3A%7B%22field%22%3A%22cases.case_id%22%2C%22value%22%3A%5B%22{{rec.case}}%22%5D%7D%2C%22op%22%3A%22in%22%7D%2C%7B%22content%22%3A%7B%22field%22%3A%22files.experimental_strategy%22%2C%22value%22%3A%5B%22Tissue%20Slide%22%5D%7D%2C%22op%22%3A%22in%22%7D%5D%2C%22op%22%3A%22and%22%7D&searchTableTab=files">
                    yes
                </a>
                {% else %}
                no
                {%endif %}
            </td>
        </tr>
{% endfor %}
    </tbody>
</table>

<br/>

[Contents ↑](#contents)

----

<br/>

## sfaira

sfaira ties together single-cell data for over 170 datasets for numerous tissues
types in both human and mouse. Downloading and loading the datasets can take
significant time. Here metadata from the {{ len(site.data.sfaira) }} human brain datasets has been parsed
using the `sfaira` python library:

```python
    ds = sfaira.data.Universe(data_path=datadir, meta_path=metadir, cache_path=cachedir)
    ds.subset(key="organism", values=["Homo sapiens"])
    ds.subset(key="organ", values=["brain"])
    ds.download()
    ds.load(verbose=1)
    ds.streamline_features(match_to_release="104", subset_genes_to_type="protein_coding")
    ds.streamline_metadata(schema="sfaira")
```

Each column in the table displays how many cells of a given type were found in each dataset:
<ol>
{% for rec in site.data.sfaira["datasets"] %}
   <li>{{ rec.dataset }}</li>
{% endfor %}
</ol>

<br/>

<table class="display">
    <thead>
        <tr>
        <th>cell type</th>
{% for rec in site.data.sfaira["datasets"] %}
        <th>{{ forloop.index }}</th>
{% endfor %}
        </tr>
    </thead>
    <tbody>
{% for rec in site.data.sfaira["cell_types"] %}
        <tr>
            <td>{{ rec.cell_type }}</td>
{% for dataset in rec.datasets %}
            <td>{{ dataset }}</td>
{% endfor %}
        </tr>
{% endfor %}
    </tbody>
</table>

[Contents ↑](#contents)
