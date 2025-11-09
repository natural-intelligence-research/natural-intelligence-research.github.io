---
layout: default
---

<h2>Profiles</h2>

<dl>
  {% for item in site.data.members %}
  <dt>{{ item.name }}</dt>
  <dd>{{ item.profile | newline_to_br }}</dd>
  {% endfor %}
</dl>
