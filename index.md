---
layout: default
title: Home
---

<section class="hero">

  <h2 class="hero-title">
    Elevate Thinking Through Systems, Not Information
  </h2>

  <p class="hero-sub">
    A structured platform for mastering strategy, AI, and decision-making 
    through drills, frameworks, and real-world patterns.
  </p>

</section>


<section class="featured">

  <h2>What This Platform Is</h2>

  <p>
    Elevate is not a blog. It is a thinking system.
  </p>

  <p>
    Instead of consuming information, you train how to think —
    using drills, structured frameworks, and pattern recognition.
  </p>

</section>


<section class="content">

  <h2>The System</h2>

  <ul class="content-list">
    <li><strong>Drills</strong> — Build thinking through practice</li>
    <li><strong>Think Tank</strong> — Frameworks for structured reasoning</li>
    <li><strong>Writing</strong> — Ideas, insights, and synthesis</li>
  </ul>

</section>


<section class="content">

  <h2>Start Here</h2>

  <ul class="content-list">
    <li><a href="/drills">→ Begin with Drills</a></li>
    <li><a href="/think-tank">→ Explore Frameworks</a></li>
    <li><a href="/writing">→ Read Insights</a></li>
  </ul>

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