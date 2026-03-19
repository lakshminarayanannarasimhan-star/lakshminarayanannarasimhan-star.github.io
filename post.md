---
layout: default
title: Posts
permalink: /posts/
---

<section class="section-wide">

  <h1>Thinking Library</h1>
  <p class="hero-sub">
    Strategy · Systems · First Principles · Execution
  </p>

  <div class="card-grid">

    {% for post in site.posts %}
      <div class="card">
        <h3>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </h3>

        <p class="meta">
          {{ post.date | date: "%B %d, %Y" }}
        </p>

        {% if post.excerpt %}
          <p>{{ post.excerpt }}</p>
        {% endif %}

        <a href="{{ post.url }}" class="card-link">
          Read
        </a>
      </div>
    {% endfor %}

  </div>

</section>