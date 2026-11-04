---
layout: page
title: Publications
permalink: /publications/
nav: true
nav_order: 1
description: Research papers and preprints.
---

<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}">

{% capture publication_list %}{% bibliography %}{% endcapture %}
{% assign publication_text = publication_list | strip_html | strip %}
{% if publication_text != empty %}
<div class="publications">{{ publication_list }}</div>
{% else %}
<div class="publication-empty">Research papers and preprints will be listed here as they become publicly available.</div>
{% endif %}
