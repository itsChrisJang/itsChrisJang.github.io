---
layout: page
title: Writing & Talks
permalink: /writing/
nav: true
nav_order: 4
description: Engineering case studies on system behavior, consistency, and performance.
---

<link rel="stylesheet" href="{{ "/assets/css/academic.css" | relative_url }}">

Case studies from my engineering work explore how systems behave under load, how shared state remains consistent, and how implementation choices affect performance. They provide context for the engineering experience I bring to simulation and optimization research.

## Conference Presentation

### Data Consistency in High-Concurrency Events

**A Redis Distributed Lock Case Study**  
SIPE 4th Conference · Aug 2, 2025 · Presented in Korean

An analysis of race conditions in high-traffic commerce promotions, a Redis Lettuce spin-lock implementation with a FIFO approach using Sorted Sets, and architectural alternatives involving Lua scripts, Kafka queues, and token allocation.

[Conference](https://4th-sadamcon.sipe.team) · [Watch the talk](https://www.youtube.com/watch?v=82dZiMYlQL0)

## Engineering Articles

### Caching Under Traffic Surges

A TONYMOLY commerce performance case study focused on Redis caching and request handling.

[Read article →](https://tonymoly-tech.medium.com/redis-cache-tonymoly-performance-c5a5e18ae83c)

### Distributed Locks and Consistent State

A Redis Lettuce implementation for coordinating concurrent operations and preserving data consistency.

[Read article →](https://tonymoly-tech.medium.com/redis-lettuce-distributed-lock-for-data-integrity-4bc5c8623f05)

### Evaluating and Improving API Performance

A two-part account of performance improvements, including SQL execution plans and indexing.

[Part 1 →](https://chris-jang.medium.com/test-c0c0a158d72f) · [Part 2 →](https://tonymoly-tech.medium.com/tonymoly-api-query-optimization-ae84a4ca4f8b)

[TONYMOLY Engineering](https://tonymoly-tech.medium.com) · [Personal Engineering Articles](https://chris-jang.medium.com/list/engineering-6507a77522cd)

Articles are in Korean; titles above are English descriptions.

{% if site.data.traffic.enabled and site.data.traffic.endpoint != empty %}
<script data-goatcounter="{{ site.data.traffic.endpoint | escape }}/count" async src="https://gc.zgo.at/count.js"></script>
{% endif %}
