---
layout: default
title: Talks
---
{% for post in site.categories.talks reversed %}
[{{ post.title }}]({{ post.url }}) - {{ post.date | date_to_string }}
{% endfor %}