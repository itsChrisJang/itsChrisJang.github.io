---
layout: page
title: Experience
permalink: /experience/
nav: true
nav_order: 3
description: Production systems, performance evaluation, and engineering mentorship.
---

<link rel="alternate" hreflang="ko" href="{{ site.url }}/ko/experience/">
<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}">

<div class="page-tools"><span class="page-label">RESEARCH & ENGINEERING</span><nav class="language-switch" aria-label="Language"><a href="/experience/" lang="en" hreflang="en" aria-current="page">EN</a><a href="/ko/experience/" lang="ko" hreflang="ko">한국어</a></nav></div>

My industry experience provides a foundation in implementing reliable systems, working with event-driven architectures, and measuring performance. I am bringing this engineering perspective to graduate research in simulation and optimization.

{% for item in site.data.career %}
## {{ item.company }}

**{{ item.role }} · {{ item.period }}**

{% for detail in item.details %}- {{ detail }}
{% endfor %}

{% endfor %}

## Mentoring & Community

<table>
<thead><tr><th scope="col">Activity</th><th scope="col">Role</th><th scope="col">Period</th></tr></thead>
<tbody>
{% for item in site.data.community %}
<tr><td>{{ item.activity }}</td><td>{{ item.role }}</td><td>{{ item.period }}</td></tr>
{% endfor %}
</tbody>
</table>

{% if site.data.traffic.enabled and site.data.traffic.endpoint != empty %}
<script data-goatcounter="{{ site.data.traffic.endpoint | escape }}/count" async src="https://gc.zgo.at/count.js"></script>
{% endif %}

<script src="{{ "/assets/js/site-language.js" | relative_url }}" defer></script>
