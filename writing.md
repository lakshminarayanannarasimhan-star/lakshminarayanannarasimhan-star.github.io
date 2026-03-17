---
layout: default
title: Writing
---

# Writing

A collection of ideas, insights, and structured thinking.

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>