---
layout: page
title: 이력서
permalink: /ko/cv/
lang: ko
nav: false
nav_order: 5
description: 장준환 (Chris) · 연구 관심 분야 및 엔지니어링 경험
---

<link rel="alternate" hreflang="en" href="{{ site.url }}/cv/">
<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}?v=20261108-2">

<div class="page-tools"><span class="page-label">연구와 엔지니어링</span><nav class="language-switch" aria-label="언어 선택"><a href="/cv/" lang="en" hreflang="en">EN</a><a href="/ko/cv/" lang="ko" hreflang="ko" aria-current="page">한국어</a></nav></div>

[이메일](mailto:qiiopasd1@gmail.com) · [GitHub](https://github.com/itsChrisJang) · [LinkedIn](https://www.linkedin.com/in/jun-hwan-jang-aa7567209/)  
대한민국 서울

<button class="print-cv" type="button" onclick="window.print()">인쇄 / PDF 저장</button>

## 학력

<div class="education-list">
{% for item in site.data.education %}
<div class="education-item">
  <div class="education-heading"><strong>{{ item.school_ko }}</strong><span class="period">{{ item.period | replace: "Mar 2027 (expected)", "2027.03 (예정)" | replace: "Entered Sep 2025", "2025.09 입학" | replace: "Mar 2023 – Feb 2024", "2023.03 – 2024.02" | replace: "Mar 2024 – Jan 2026", "2024.03 – 2026.01" | replace: "Feb 2023 – Mar 2024", "2023.02 – 2024.03" | replace: "Sep 2022 – Oct 2022", "2022.09 – 2022.10" | replace: "Nov 2020 – Jul 2022", "2020.11 – 2022.07" | replace: "Present", "현재" }}</span></div>
  <div>{{ item.program_ko }}</div>
  <div class="education-detail">{% if item.url %}<a href="{{ item.url }}">{{ item.detail_ko }}</a>{% else %}{{ item.detail_ko }}{% endif %}</div>
</div>
{% endfor %}
</div>

## 연구 관심 분야

디지털 트윈 · 시뮬레이션 기반 최적화 · 다중 패러다임 시뮬레이션 · 운영연구

[김소정 교수님의 연구](https://sites.google.com/site/sojungk8/)에 맞춰 복잡한 시스템의 모델링과 평가를 통해 운영 의사결정을 지원하는 방향으로 연구할 계획입니다.

## 연구 및 엔지니어링 기반

### 앞으로의 대학원 연구

**동국대학교 · 시뮬레이션 기반 최적화 연구실**  
**김소정 교수 · 2027년 3월 시작 예정**

김소정 교수님의 연구 방향에 맞춰 **디지털 트윈, 시뮬레이션, 최적화**를 중심으로 연구할 계획입니다. 소프트웨어 개발 경험을 바탕으로 모델을 구현하고 시스템 동작을 평가하며 의사결정 지원 도구를 개발하고자 합니다.

### 소프트웨어 엔지니어링 기반

| 역량                    | 경험 및 학습 방향                                                     | 연구에서의 활용                                                 |
| ----------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------- |
| 시스템 구현             | Java, Spring Boot, Spring WebFlux 기반 서비스 설계 및 운영            | 시뮬레이션 모델을 위한 인터페이스 및 소프트웨어 기반 구현       |
| 이벤트 및 상태 관리     | Redis, Kafka, 동시성 제어, 분산 락                                    | 데이터 연동 애플리케이션의 이벤트 처리와 상태 정합성 유지       |
| 성능 평가               | API 프로파일링, SQL 실행 계획, 인덱싱, 캐싱                           | 실행 성능 측정, 병목 파악 및 구현 대안 비교                     |
| 실험 도구 개발          | 제품 기획, 배포 및 운영                                               | 모델과 의사결정 지원 아이디어를 사용 가능한 프로토타입으로 구현 |
| 시뮬레이션 모델 구현    | 학습 예정: 에이전트 기반 모델, 이산사건 시뮬레이션, 시스템 다이내믹스 | 시스템의 가정을 실행 가능한 모델로 구현                         |
| 디지털 트윈 데이터 연동 | 학습 예정: 운영 데이터와 모델 상태의 연결                             | 관측한 시스템 동작과 가상 모델의 상태를 일치시키기              |
| 최적화 알고리즘         | 학습 예정: 시뮬레이션 기반 최적화 및 시나리오 탐색                    | 제약 조건과 불확실성 아래에서 운영 대안 평가                    |
| 연구 실험 및 검증       | 학습 예정: 보정, 민감도 분석, 재현 가능한 실험                        | 모델의 타당성 검증 및 결과의 체계적인 비교                      |

위의 학습 예정 항목은 2027년 3월부터 김소정 교수님과의 대학원 연구에서 키워갈 역량입니다.

## 실무 경력

<table>
<thead><tr><th scope="col">소속</th><th scope="col">기간</th></tr></thead>
<tbody>
{% for item in site.data.career %}
<tr><td>{{ item.company_ko }}</td><td>{{ item.period | replace: "Mar 2027 (expected)", "2027.03 (예정)" | replace: "Entered Sep 2025", "2025.09 입학" | replace: "Mar 2023 – Feb 2024", "2023.03 – 2024.02" | replace: "Mar 2024 – Jan 2026", "2024.03 – 2026.01" | replace: "Feb 2023 – Mar 2024", "2023.02 – 2024.03" | replace: "Sep 2022 – Oct 2022", "2022.09 – 2022.10" | replace: "Nov 2020 – Jul 2022", "2020.11 – 2022.07" | replace: "Present", "현재" }}</td></tr>
{% endfor %}
</tbody>
</table>

[주요 업무 및 경험 →](/ko/experience/)

## 논문

{% capture publication_list %}{% bibliography %}{% endcapture %}
{% assign publication_text = publication_list | strip_html | strip %}
{% if publication_text != empty %}
<div class="publications">{{ publication_list }}</div>
{% else %}
<div class="publication-empty">논문과 프리프린트는 공개되는 대로 이곳에 정리할 예정입니다.</div>
{% endif %}

## 발표

**동시성이 높은 이벤트의 데이터 정합성: Redis 분산 락 사례**  
SIPE 4기 사담콘 · 2025.08.02

## 자격

- 정보처리기사 · 2024.06
- SQL 개발자 (SQLD) · 2021.04

## 멘토링 및 커뮤니티

<table>
<thead><tr><th scope="col">활동</th><th scope="col">역할</th><th scope="col">기간</th></tr></thead>
<tbody>
{% for item in site.data.community %}
<tr><td>{{ item.activity_ko }}</td><td>{{ item.role_ko }}</td><td>{{ item.period | replace: "Mar 2027 (expected)", "2027.03 (예정)" | replace: "Entered Sep 2025", "2025.09 입학" | replace: "Mar 2023 – Feb 2024", "2023.03 – 2024.02" | replace: "Mar 2024 – Jan 2026", "2024.03 – 2026.01" | replace: "Feb 2023 – Mar 2024", "2023.02 – 2024.03" | replace: "Sep 2022 – Oct 2022", "2022.09 – 2022.10" | replace: "Nov 2020 – Jul 2022", "2020.11 – 2022.07" | replace: "Present", "현재" }}</td></tr>
{% endfor %}
</tbody>
</table>

[발표 및 글](/ko/writing/)

{% if site.data.traffic.enabled and site.data.traffic.endpoint != empty %}
<script data-goatcounter="{{ site.data.traffic.endpoint | escape }}/count" async src="https://gc.zgo.at/count.js"></script>
{% endif %}

<script src="{{ "/assets/js/site-language.js" | relative_url }}?v=20261108-2" defer></script>
