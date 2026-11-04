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

[Conference](https://4th-sadamcon.sipe.team) · [Presentation resources](https://github.com/itsChrisJang#-technical-presentation)

## Engineering Articles

### Caching Under Traffic Surges

A TONYMOLY commerce performance case study focused on Redis caching and request handling.

### Distributed Locks and Consistent State

A Redis Lettuce implementation for coordinating concurrent operations and preserving data consistency.

### Evaluating and Improving API Performance

A two-part account of performance improvements, including SQL execution plans and indexing.

[TONYMOLY Engineering](https://tonymoly-tech.medium.com) · [Personal Engineering Articles](https://chris-jang.medium.com/list/engineering-6507a77522cd)

Articles are in Korean; titles above are English descriptions.
