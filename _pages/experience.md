---
layout: page
title: Experience
permalink: /experience/
nav: true
nav_order: 3
description: Production systems, performance evaluation, and engineering mentorship.
---

<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}">

My industry experience provides a foundation in implementing reliable systems, working with event-driven architectures, and measuring performance. I am bringing this engineering perspective to graduate research in simulation and optimization.

{% for item in site.data.career %}
## {{ item.company }}

**{{ item.role }} · {{ item.period }}**

{% for detail in item.details %}- {{ detail }}
{% endfor %}

{% endfor %}

## Mentoring & Community

| Activity                  | Role                      | Period              |
| ------------------------- | ------------------------- | ------------------- |
| CodeIt Sprint, Spring 5th | Backend mentor            | Jul 2025 – Jan 2026 |
| Guro Youth Mentor         | Backend mentor            | Jun – Dec 2025      |
| CMC 17th                  | Server developer          | May – Aug 2025      |
| SIPE                      | 3rd, 4th, and 5th cohorts | 3rd–5th cohorts     |
| JAVACAFE                  | Member                    | Since Sep 2024      |
