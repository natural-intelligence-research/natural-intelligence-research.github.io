---
layout: default
---

![{{ site.title }} logo]({{ 'assets/images/nir-logo.png' | relative_url }})

<p>{{ site.description }}</p>
<p>{{ site.detail }}</p>

---

<div class="works">

{% for work in site.data.works %}

<h3>{{ work.title }}</h3>

<table>
{% for item in work.basic %}
<tr>
<th>{{item.label}}</th>
  <td>
  {% if item.value.first %}
  {% for v in item.value %}{{ v }}<br>
  {% endfor %}
  {% else %}{{ item.value }}
  {% endif %}
  </td>
</tr>
  {% endfor %}
</table>

<table>
{% for item in work.detail %}
<tr>
<th>{{item.label}}</th>
  <td>
  {% if item.value.first %}
  {% for v in item.value %}{{ v }}<br>
  {% endfor %}
  {% else %}{{ item.value }}
  {% endif %}
  </td>
</tr>
  {% endfor %}
</table>

<img src="{{ work.images[0] }}" alt="{{ work.title }} fig.">
<img src="{{ work.images[1] }}" alt="{{ work.title }} fig.">

{% endfor %}

</div>

---

&copy;{{ site.time | date: '%Y' }} {{ site.author }}. All Rights Reserved
