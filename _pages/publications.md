---
layout: page
title: Publications
permalink: /publications/
nav: true
nav_order: 1
description: Research papers and preprints.
---

<link rel="alternate" hreflang="ko" href="{{ site.url }}/ko/publications/">
<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}">

<div class="page-tools"><span class="page-label">RESEARCH & ENGINEERING</span><nav class="language-switch" aria-label="Language"><a href="/publications/" lang="en" hreflang="en" aria-current="page">EN</a><a href="/ko/publications/" lang="ko" hreflang="ko">한국어</a></nav></div>

{% capture publication_list %}{% bibliography %}{% endcapture %}
{% assign publication_text = publication_list | strip_html | strip %}
{% if publication_text != empty %}
<div class="publications">{{ publication_list }}</div>
{% else %}
<div class="publication-empty">Research papers and preprints will be listed here as they become publicly available.</div>
{% endif %}

{% if site.data.traffic.enabled and site.data.traffic.endpoint != empty %}
<script data-goatcounter="{{ site.data.traffic.endpoint | escape }}/count" async src="https://gc.zgo.at/count.js"></script>
{% endif %}

<script src="{{ "/assets/js/site-language.js" | relative_url }}" defer></script>
