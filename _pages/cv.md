---
layout: page
title: CV
permalink: /cv/
nav: true
nav_order: 5
description: Junhwan (Chris) Jang · Research interests and engineering experience
---

<link rel="alternate" hreflang="ko" href="{{ site.url }}/ko/cv/">
<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}?v=20261108-2">

<div class="page-tools"><span class="page-label">RESEARCH & ENGINEERING</span><nav class="language-switch" aria-label="Language"><a href="/cv/" lang="en" hreflang="en" aria-current="page">EN</a><a href="/ko/cv/" lang="ko" hreflang="ko">한국어</a></nav></div>

[Email](mailto:qiiopasd1@gmail.com) · [GitHub](https://github.com/itsChrisJang) · [LinkedIn](https://www.linkedin.com/in/jun-hwan-jang-aa7567209/)  
Seoul, South Korea

<button class="print-cv" type="button" onclick="window.print()">Print / Save as PDF</button>

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

### Upcoming Graduate Research

**Simulation-Based Optimization Laboratory · Dongguk University**  
**Prof. Sojung Kim · Expected start: Mar 2027**

My planned graduate research will focus on **digital twins, simulation, and optimization**, aligned with Prof. Sojung Kim’s research. I aim to build on my software engineering background to implement models, evaluate system behavior, and develop decision-support tools.

### Software Engineering Foundation

| Capability                        | Foundation & development focus                                                              | Research application                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| System implementation             | Java, Spring Boot, Spring WebFlux; service design and operation                             | Implementing system interfaces and the software infrastructure around simulation models     |
| Event and state management        | Redis, Kafka, concurrency control, distributed locks                                        | Handling events and maintaining consistent system state in data-connected applications      |
| Performance evaluation            | API profiling, SQL execution plans, indexing, caching                                       | Measuring runtime behavior, locating bottlenecks, and comparing implementation alternatives |
| Experiment delivery               | Product planning, deployment, and operation                                                 | Turning models and decision-support ideas into usable software prototypes                   |
| Simulation model implementation   | Planned lab development: agent-based models, discrete-event simulation, and system dynamics | Translating system assumptions into executable models                                       |
| Digital-twin data integration     | Planned lab development: connecting operational data with model state                       | Keeping virtual system representations aligned with observed behavior                       |
| Optimization algorithms           | Planned lab development: simulation-based optimization and scenario search                  | Evaluating operational alternatives under constraints and uncertainty                       |
| Research experiments & validation | Planned lab development: calibration, sensitivity analysis, and reproducible experiments    | Testing model credibility and comparing outcomes systematically                             |

The planned development areas above are priorities for graduate study with Prof. Sojung Kim, beginning in March 2027.

## Professional Experience

<table>
<thead><tr><th scope="col">Organization</th><th scope="col">Period</th></tr></thead>
<tbody>
{% for item in site.data.career %}
<tr><td>{{ item.company }}</td><td>{{ item.period }}</td></tr>
{% endfor %}
</tbody>
</table>

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

<table>
<thead><tr><th scope="col">Activity</th><th scope="col">Role</th><th scope="col">Period</th></tr></thead>
<tbody>
{% for item in site.data.community %}
<tr><td>{{ item.activity }}</td><td>{{ item.role }}</td><td>{{ item.period }}</td></tr>
{% endfor %}
</tbody>
</table>

[Writing & talks](/writing/)

{% if site.data.traffic.enabled and site.data.traffic.endpoint != empty %}
<script data-goatcounter="{{ site.data.traffic.endpoint | escape }}/count" async src="https://gc.zgo.at/count.js"></script>
{% endif %}

<script src="{{ "/assets/js/site-language.js" | relative_url }}?v=20261108-2" defer></script>
