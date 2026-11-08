---
layout: page
title: 경력
permalink: /ko/experience/
lang: ko
nav: false
nav_order: 3
description: 서비스 개발·운영, 성능 평가, 그리고 개발 멘토링.
---

<link rel="alternate" hreflang="en" href="{{ site.url }}/experience/">
<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}">

<div class="page-tools"><span class="page-label">연구와 엔지니어링</span><nav class="language-switch" aria-label="언어 선택"><a href="/experience/" lang="en" hreflang="en">EN</a><a href="/ko/experience/" lang="ko" hreflang="ko" aria-current="page">한국어</a></nav></div>

실무에서 안정적인 시스템 구현, 이벤트 기반 아키텍처, 성능 측정의 경험을 쌓았습니다. 이러한 엔지니어링 관점을 대학원의 시뮬레이션 및 최적화 연구로 이어가고자 합니다.

{% for item in site.data.career %}
## {{ item.company_ko }}

**{{ item.role_ko }} · {{ item.period | replace: "Mar 2027 (expected)", "2027.03 (예정)" | replace: "Entered Sep 2025", "2025.09 입학" | replace: "Mar 2023 – Feb 2024", "2023.03 – 2024.02" | replace: "Mar 2024 – Jan 2026", "2024.03 – 2026.01" | replace: "Feb 2023 – Mar 2024", "2023.02 – 2024.03" | replace: "Sep 2022 – Oct 2022", "2022.09 – 2022.10" | replace: "Nov 2020 – Jul 2022", "2020.11 – 2022.07" | replace: "Present", "현재" }}**

{% for detail in item.details_ko %}- {{ detail }}
{% endfor %}

{% endfor %}

## 멘토링 및 커뮤니티

<table>
<thead><tr><th scope="col">활동</th><th scope="col">역할</th><th scope="col">기간</th></tr></thead>
<tbody>
{% for item in site.data.community %}
<tr><td>{{ item.activity_ko }}</td><td>{{ item.role_ko }}</td><td>{{ item.period | replace: "Mar 2027 (expected)", "2027.03 (예정)" | replace: "Entered Sep 2025", "2025.09 입학" | replace: "Mar 2023 – Feb 2024", "2023.03 – 2024.02" | replace: "Mar 2024 – Jan 2026", "2024.03 – 2026.01" | replace: "Feb 2023 – Mar 2024", "2023.02 – 2024.03" | replace: "Sep 2022 – Oct 2022", "2022.09 – 2022.10" | replace: "Nov 2020 – Jul 2022", "2020.11 – 2022.07" | replace: "Present", "현재" }}</td></tr>
{% endfor %}
</tbody>
</table>

{% if site.data.traffic.enabled and site.data.traffic.endpoint != empty %}
<script data-goatcounter="{{ site.data.traffic.endpoint | escape }}/count" async src="https://gc.zgo.at/count.js"></script>
{% endif %}

<script src="{{ "/assets/js/site-language.js" | relative_url }}" defer></script>
