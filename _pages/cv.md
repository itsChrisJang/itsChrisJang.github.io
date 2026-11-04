---
layout: page
title: CV
permalink: /cv/
nav: true
nav_order: 5
description: Junhwan (Chris) Jang · Research interests and engineering experience
---

<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}">

[Email](mailto:qiiopasd1@gmail.com) · [GitHub](https://github.com/itsChrisJang) · [LinkedIn](https://www.linkedin.com/in/jun-hwan-jang-aa7567209/)  
Seoul, South Korea

## Education

<div class="education-list">
{% for item in site.data.education %}
<div class="education-item">
  <div class="education-heading"><strong>{{ item.school }}</strong><span class="period">{{ item.period }}</span></div>
  <div>{{ item.program }}</div>
  <div class="education-detail">{% if item.url %}<a href="{{ item.url }}">{{ item.detail }}</a>{% else %}{{ item.detail }}{% endif %}</div>
</div>
{% endfor %}
</div>

## Research Interests

Digital twins · Simulation-based optimization · Multi-paradigm simulation · Operations research

Intended research direction: modeling and evaluating complex systems to support operational decisions, aligned with [Prof. Sojung Kim’s research](https://sites.google.com/site/sojungk8/).

## Research & Engineering Foundation

| Capability                 | Engineering foundation                                          | Connection to research                                                                      |
| -------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| System implementation      | Java, Spring Boot, Spring WebFlux; service design and operation | Implementing system interfaces and the software infrastructure around simulation models     |
| Event and state management | Redis, Kafka, concurrency control, distributed locks            | Handling events and maintaining consistent system state in data-connected applications      |
| Performance evaluation     | API profiling, SQL execution plans, indexing, caching           | Measuring runtime behavior, locating bottlenecks, and comparing implementation alternatives |
| Experiment delivery        | Product planning, deployment, and operation                     | Turning models and decision-support ideas into usable software prototypes                   |

## Professional Experience

| Organization        | Period              |
| ------------------- | ------------------- |
| TONYMOLY            | Mar 2024 – Jan 2026 |
| Blumn AI            | Feb 2023 – Mar 2024 |
| Mesh Korea (Vroong) | Aug 2022 – Feb 2023 |
| Startup             | Jan 2020 – Aug 2022 |

[Selected work and responsibilities →](/experience/)

## Publications

{% capture publication_list %}{% bibliography %}{% endcapture %}
{% assign publication_text = publication_list | strip_html | strip %}
{% if publication_text != empty %}
<div class="publications">{{ publication_list }}</div>
{% else %}
<div class="publication-empty">Research papers and preprints will be listed here as they become publicly available.</div>
{% endif %}

## Presentation

**Data Consistency in High-Concurrency Events: A Redis Distributed Lock Case Study**  
SIPE 4th Conference · Aug 2, 2025

## Certifications

- Engineer Information Processing · Jun 2024
- SQL Developer (SQLD) · Apr 2021

## Mentoring & Community

- CodeIt Sprint — Spring 5th backend mentor · Jul 2025 – Jan 2026
- Guro Youth Mentor — backend mentor · May – Dec 2025
- CMC 17th — server developer · May – Aug 2025
- SIPE — 3rd, 4th, and 5th cohorts
- JAVACAFE — member since Sep 2024

[Independent products](/projects/) · [Writing & talks](/writing/)
