---
layout: default
title: Home
---

<section class="hero">
  <h1 class="hero-title">AI, Strategy, and Systems Thinking</h1>
  <p class="hero-sub">
    Building structured thinking through drills, frameworks, and systems.
  </p>
</section>

<section class="featured">
  <h2>Strategic Thinking System</h2>
  <p>
    A structured approach built through 1600+ drills covering patterns,
    systems, and decision-making.
  </p>
</section>

<section class="content">
  <h2>Recent Work</h2>
  <ul class="content-list">
    {% for post in site.posts limit:5 %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
</section>