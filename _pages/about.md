---
layout: about
title: About
permalink: /
subtitle: Digital Twins · Simulation · Optimization
profile: false
selected_papers: false
social: true
announcements:
  enabled: false
latest_posts:
  enabled: false
---

<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}">

<div class="academic-hero">
<div class="academic-hero-copy" markdown="1">

<p class="academic-kicker">INCOMING GRADUATE STUDENT · MARCH 2027</p>

I’m **Junhwan (Chris) Jang**, preparing to begin graduate study at **Dongguk University** with [**Prof. Sojung Kim**](https://sites.google.com/site/sojungk8/) in the **Simulation-Based Optimization Laboratory**.

I am interested in **digital twins, simulation, and optimization**—understanding how complex systems behave and using models to inform better decisions. My background is in software engineering, where I have built and operated production backend services and independent products.

<div class="academic-links"><a href="/cv/">Curriculum Vitae ↗</a><a href="/publications/">Publications ↗</a><a href="https://github.com/itsChrisJang">GitHub ↗</a></div>

</div>
<img class="academic-portrait" src="/assets/img/chris.jpg" alt="Junhwan (Chris) Jang" width="168" height="168">
</div>

<nav class="section-links" aria-label="On this page"><a href="#education">Education</a><a href="#research-interests">Research</a><a href="#publications">Publications</a><a href="#industry-experience">Experience</a></nav>

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

<div class="research-grid">
<article class="research-card"><span class="research-index">01 / MODEL</span><h3>Digital Twins</h3><p>Representing real-world systems to explore behavior, test scenarios, and support operational decisions.</p></article>
<article class="research-card"><span class="research-index">02 / SIMULATE</span><h3>Simulation</h3><p>Agent-based modeling, discrete-event simulation, and system dynamics for complex interacting systems.</p></article>
<article class="research-card"><span class="research-index">03 / OPTIMIZE</span><h3>Optimization</h3><p>Simulation-based optimization and operations research for evaluating alternatives under uncertainty.</p></article>
</div>

My intended research direction follows [Prof. Sojung Kim’s work](https://sites.google.com/site/sojungk8/) in digital twins, simulation, and optimization, with applications including supply chains, renewable energy, and smart farming systems.

## Publications

{% capture publication_list %}{% bibliography %}{% endcapture %}
{% assign publication_text = publication_list | strip_html | strip %}
{% if publication_text != empty %}
<div class="publications">{{ publication_list }}</div>
{% else %}
<div class="publication-empty">Research papers and preprints will be listed here as they become publicly available.</div>
{% endif %}

[View publication record →](/publications/)

## Research & Engineering Foundation

### Upcoming Graduate Research

**Simulation-Based Optimization Laboratory · Dongguk University**  
**Prof. Sojung Kim · Expected start: Mar 2027**

My planned graduate research will focus on **digital twins, simulation, and optimization**, aligned with Prof. Sojung Kim’s research. I aim to build on my software engineering background to implement models, evaluate system behavior, and develop decision-support tools.

| Research direction            | Planned focus                                                                |
| ----------------------------- | ---------------------------------------------------------------------------- |
| Digital twins                 | Modeling real-world systems and connecting models with operational data      |
| Simulation                    | Exploring agent-based models, discrete-event simulation, and system dynamics |
| Simulation-based optimization | Comparing scenarios and operational decisions under uncertainty              |

### Software Engineering Foundation

I bring practical experience in building event-driven services, preserving data consistency, and evaluating performance. These skills form a software engineering foundation for my transition into simulation and optimization research.

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

## Industry Experience

<div class="career-list">
{% for item in site.data.career %}
<div class="career-item">
<div class="education-heading"><strong>{{ item.company }}</strong><span class="period">{{ item.period }}</span></div>
<p>{{ item.summary }}</p>
</div>
{% endfor %}
</div>

[Full experience & mentoring →](/experience/)

## Talks & Writing

**Data Consistency in High-Concurrency Events: A Redis Distributed Lock Case Study**  
SIPE 4th Conference · Aug 2, 2025

Production lessons on race conditions, fair access, atomic operations, and the tradeoffs of lock-based designs.

[Talks, engineering articles & resources →](/writing/)

{% if site.data.traffic.enabled and site.data.traffic.endpoint != empty %}
<script data-goatcounter="{{ site.data.traffic.endpoint | escape }}/count" async src="https://gc.zgo.at/count.js"></script>
{% endif %}

{% if site.data.traffic.enabled and site.data.traffic.endpoint != empty %}
<section class="site-traffic" aria-labelledby="traffic-heading" data-traffic-endpoint="{{ site.data.traffic.endpoint | escape }}">
<h2 id="traffic-heading">Site Visits</h2>
<div class="traffic-grid">
<div><span>Today</span><strong data-count="today">—</strong></div>
<div><span>Last 7 days</span><strong data-count="week">—</strong></div>
<div><span>All time</span><strong data-count="total">—</strong></div>
</div>
<p class="traffic-note" role="status">Visits are counted in Korea Standard Time. Updates may be delayed by up to four hours.</p>
<noscript>Visit statistics require JavaScript.</noscript>
</section>
{% endif %}

<script src="{{ "/assets/js/traffic.js" | relative_url }}" defer></script>
