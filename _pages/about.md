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

I bring practical experience in building event-driven services, preserving data consistency, and evaluating performance. These skills form a software engineering foundation for my transition into simulation and optimization research.

| Capability                 | Engineering foundation                                          | Connection to research                                                                      |
| -------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| System implementation      | Java, Spring Boot, Spring WebFlux; service design and operation | Implementing system interfaces and the software infrastructure around simulation models     |
| Event and state management | Redis, Kafka, concurrency control, distributed locks            | Handling events and maintaining consistent system state in data-connected applications      |
| Performance evaluation     | API profiling, SQL execution plans, indexing, caching           | Measuring runtime behavior, locating bottlenecks, and comparing implementation alternatives |
| Experiment delivery        | Product planning, deployment, and operation                     | Turning models and decision-support ideas into usable software prototypes                   |

## Industry Experience

**TONYMOLY** · Mar 2024 – Jan 2026  
Backend development for commerce services: layered caching, concurrency control, query optimization, and production operations.

**Blumn AI** · Feb 2023 – Mar 2024  
Backend engineering for messaging and chatbot platforms, including webhook event processing and reactive services.

**Mesh Korea (Vroong)** · Aug 2022 – Feb 2023  
Backend engineering experience in a logistics technology organization.

[Full experience & mentoring →](/experience/)

## Selected Projects

- [**Bbanggu**](/projects/bbanggu/) — matching people with last-minute event vacancies.
- [**Memento**](/projects/memento/) — organizing personal digital assets and legacy information.
- [**Carry Wise**](/projects/carry-wise/) — golf carry-distance guidance using environmental and swing data.
- [**AI Score**](/projects/ai-score/) — an AI-powered personality and insight experience.

## Talks & Writing

**Data Consistency in High-Concurrency Events: A Redis Distributed Lock Case Study**  
SIPE 4th Conference · Aug 2, 2025

Production lessons on race conditions, fair access, atomic operations, and the tradeoffs of lock-based designs.

[Talks, engineering articles & resources →](/writing/)
