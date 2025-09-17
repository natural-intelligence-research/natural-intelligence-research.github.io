---
layout: default
---

![{{ site.title }} logo]({{ 'assets/images/nir-logo.png' | relative_url }})

<p>{{ site.description }}</p>
<p>{{ site.detail }}</p>

---

{% for work in site.data.works %}

## {{ work.title }}

{% for item in work.basic %}

- {{item.label}}
  {% if item.value.first %}
  {% for v in item.value %} - {{ v }}
  {% endfor %}
  {% else %} - {{ item.value }}
  {% endif %}
  {% endfor %}

{% for item in work.detail %}

- {{item.label}}
  {% if item.value.first %}
  {% for v in item.value %} - {{ v }}
  {% endfor %}
  {% else %} - {{ item.value }}
  {% endif %}
  {% endfor %}

![{{ work.title }} fig.]({{ work.images[0] }})
![{{ work.title }} fig.]({{ work.images[1] }})

{% endfor %}

---

&copy;{{ site.time | date: '%Y' }} {{ site.author }}. All Rights Reserved
