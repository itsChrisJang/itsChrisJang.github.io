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

<table>
<thead><tr><th scope="col">Activity</th><th scope="col">Role</th><th scope="col">Period</th></tr></thead>
<tbody>
{% for item in site.data.community %}
<tr><td>{{ item.activity }}</td><td>{{ item.role }}</td><td>{{ item.period }}</td></tr>
{% endfor %}
</tbody>
</table>
