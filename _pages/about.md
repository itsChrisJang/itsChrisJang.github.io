---
layout: about
title: About
permalink: /
subtitle: Incoming Graduate Student · Dongguk University
profile:
  align: right
  image: chris.jpg
  image_circular: true
selected_papers: false
social: true
announcements:
  enabled: false
latest_posts:
  enabled: false
---

I’m **Junhwan (Chris) Jang**, an incoming graduate student at **Dongguk University (동국대학교)**, preparing to study with [**Prof. Sojung Kim (김소정 교수님)**](https://sites.google.com/site/sojungk8/).

My research interests center on **digital twins, simulation, and optimization**. I bring a background in backend engineering, with experience building and operating production services using Java, Spring, Redis, and Kafka.

[CV](/cv/) · [Publications](/publications/) · [Projects](/projects/) · [Writing & Talks](/writing/)

## Education

- **Dongguk University (동국대학교)** — incoming graduate student.  
  Preparing to study with Prof. Sojung Kim, who leads the 시뮬레이션 기반 최적화 연구실 in the Department of Industrial & Systems Engineering.
- **B.S. in Computer Software Engineering**.

## Research Interests

- **Digital twins & simulation-based optimization** — modeling system behavior and evaluating operational decisions.
- **Multi-paradigm simulation** — agent-based modeling, discrete-event simulation, and system dynamics.
- **Operations research & decision support** — stochastic modeling, supply chain design, and system optimization.

These interests align with [Prof. Kim’s research areas](https://sites.google.com/site/sojungk8/), including renewable energy and smart farming systems.

## Publications

{% capture publication_list %}{% bibliography %}{% endcapture %}
{% assign publication_text = publication_list | strip_html | strip %}
{% if publication_text != empty %}
<div class="publications">{{ publication_list }}</div>
{% else %}
Research papers and preprints will appear here as they become publicly available.
{% endif %}

[All publications](/publications/)

## Industry Experience

Before graduate study, I worked on backend services, API performance, concurrency control, and production reliability.

| Organization        | Period              |
| ------------------- | ------------------- |
| TONYMOLY            | Mar 2024 – Jan 2026 |
| Blumn AI            | Feb 2023 – Mar 2024 |
| Mesh Korea (Vroong) | Aug 2022 – Feb 2023 |
| Startup             | Jan 2020 – Aug 2022 |

[Experience & community activities](/experience/)

## Selected Projects

- [**Bbanggu**](/projects/bbanggu/) — real-time matching for last-minute vacancies in social events.
- [**Memento**](/projects/memento/) — a digital legacy vault for personal digital traces.
- [**Carry Wise**](/projects/carry-wise/) — golf carry-distance guidance.
- [**AI Score**](/projects/ai-score/) — an AI-powered personality experience.

## Talks & Community

I presented a Redis distributed-lock case study at the **SIPE 4th Conference**, sharing production lessons on concurrency and data consistency. I have also participated in SIPE and JAVACAFE and contributed as a backend mentor.

[Writing, talks & resources](/writing/)
