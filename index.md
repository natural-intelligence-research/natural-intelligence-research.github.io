---
layout: default
---

<div class="hero-area">
    <div class="inner">
        <img src="{{ 'assets/images/nir-logo.png' | relative_url }}" alt="{{ site.title }}" />
        <p>{{ site.description }}</p>
        <p>{{ site.detail }}</p>
    </div>
</div>

{% for work in site.data.works %}

<div class="works">

<section class="content-1">
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
</section>

<section class="content-2">
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
</section>

<section class="content-3">
    <img src="{{ work.images[0] }}" alt="{{ work.title }} fig.">
</section>

<section class="content-4">
    <img src="{{ work.images[1] }}" alt="{{ work.title }} fig.">
</section>

</div>
{% endfor %}

<footer class="footer">
    <div class="inner">
        <p class="text-center">
            &copy;{{ site.time | date: '%Y' }} {{ site.author }}. All Rights Reserved
        </p>
    </div>
</footer>
