---
layout: page
title: 발표 및 글
permalink: /ko/writing/
lang: ko
nav: false
nav_order: 4
description: 시스템 동작, 데이터 정합성, 성능에 관한 실무 기록.
---

<link rel="alternate" hreflang="en" href="{{ site.url }}/writing/">
<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}">

<div class="page-tools"><span class="page-label">연구와 엔지니어링</span><nav class="language-switch" aria-label="언어 선택"><a href="/writing/" lang="en" hreflang="en">EN</a><a href="/ko/writing/" lang="ko" hreflang="ko" aria-current="page">한국어</a></nav></div>

실제 개발 사례를 통해 부하 상황에서의 시스템 동작, 공유 상태의 정합성, 구현 방식에 따른 성능 차이를 정리합니다. 시뮬레이션과 최적화 연구로 이어갈 엔지니어링 경험의 기록입니다.

## 컨퍼런스 발표

### 동시성이 높은 이벤트의 데이터 정합성

**Redis 분산 락 적용 사례**  
SIPE 4기 사담콘 · 2025.08.02 · 한국어 발표

트래픽이 몰리는 커머스 프로모션의 경쟁 상태, Redis Lettuce 스핀 락과 Sorted Sets 기반 FIFO 접근 방식, Lua 스크립트·Kafka 큐·토큰 할당 등의 대안을 다룹니다.

[컨퍼런스](https://4th-sadamcon.sipe.team) · [발표 영상 보기](https://www.youtube.com/watch?v=82dZiMYlQL0)

## 기술 글

### 트래픽 급증에 대응하는 캐싱

Redis 캐싱과 요청 처리를 중심으로 정리한 토니모리 커머스 성능 개선 사례입니다.

[글 읽기 →](https://tonymoly-tech.medium.com/redis-cache-tonymoly-performance-c5a5e18ae83c)

### 분산 락과 데이터 정합성

동시 작업을 조율하고 데이터 정합성을 유지하기 위한 Redis Lettuce 구현 사례입니다.

[글 읽기 →](https://tonymoly-tech.medium.com/redis-lettuce-distributed-lock-for-data-integrity-4bc5c8623f05)

### API 성능 평가 및 개선

SQL 실행 계획과 인덱싱을 포함한 성능 개선 과정을 두 편의 글로 정리했습니다.

[1편 →](https://chris-jang.medium.com/test-c0c0a158d72f) · [2편 →](https://tonymoly-tech.medium.com/tonymoly-api-query-optimization-ae84a4ca4f8b)

[토니모리 기술 블로그](https://tonymoly-tech.medium.com) · [개인 기술 글](https://chris-jang.medium.com/list/engineering-6507a77522cd)

모든 글과 발표는 한국어로 제공됩니다.

{% if site.data.traffic.enabled and site.data.traffic.endpoint != empty %}
<script data-goatcounter="{{ site.data.traffic.endpoint | escape }}/count" async src="https://gc.zgo.at/count.js"></script>
{% endif %}

<script src="{{ "/assets/js/site-language.js" | relative_url }}" defer></script>
