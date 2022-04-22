
## Contents:

<ol>
{% for rec in sparql %}
  <li><a href="#{{ rec.name | slugify }}">{{ rec.name }}</a></li>
{% endfor %}
</ol>

{% for rec in sparql %}

<br/>

----

<br/>

[Contents ↑](#contents)

## {{ rec.name }}

{{ rec.md }}

```sparql
{{ rec.rq }}
```

<iframe style="width: 100%; height: 50vh; border: none;"
        src="{{ rec.srv | default: 'https://query.wikidata.org' }}/embed.html#{{ rec.rq | uri_escape }}"
        referrerpolicy="origin" sandbox="allow-scripts allow-same-origin allow-popups">
</iframe>

{% endfor %}
