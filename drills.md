---
layout: default
title: Drills
---

# Drills

Build structured thinking through practice.

---

## All Drills

<ul>
{% for drill in site.drills %}
  <li>
    <a href="{{ drill.url }}">{{ drill.title }}</a>
    — {{ drill.category }} / {{ drill.level }}
  </li>
{% endfor %}
</ul>