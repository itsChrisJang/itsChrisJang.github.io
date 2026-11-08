---
layout: page
title: 논문
permalink: /ko/publications/
lang: ko
nav: false
nav_order: 1
description: 논문 및 프리프린트.
---

<link rel="alternate" hreflang="en" href="{{ site.url }}/publications/">
<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}?v=20261108-2">

<div class="page-tools"><span class="page-label">연구와 엔지니어링</span><nav class="language-switch" aria-label="언어 선택"><a href="/publications/" lang="en" hreflang="en">EN</a><a href="/ko/publications/" lang="ko" hreflang="ko" aria-current="page">한국어</a></nav></div>

{% capture publication_list %}{% bibliography %}{% endcapture %}
{% assign publication_text = publication_list | strip_html | strip %}
{% if publication_text != empty %}
<div class="publications">{{ publication_list }}</div>
{% else %}
<div class="publication-empty">논문과 프리프린트는 공개되는 대로 이곳에 정리할 예정입니다.</div>
{% endif %}

{% if site.data.traffic.enabled and site.data.traffic.endpoint != empty %}
<script data-goatcounter="{{ site.data.traffic.endpoint | escape }}/count" async src="https://gc.zgo.at/count.js"></script>
{% endif %}

<script src="{{ "/assets/js/site-language.js" | relative_url }}?v=20261108-2" defer></script>
