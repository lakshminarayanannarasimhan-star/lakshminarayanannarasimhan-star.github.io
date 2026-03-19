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

  {% assign posts = site.posts | where_exp: "post", "post.featured != true" %}

  {% if posts.size > 0 %}

  <div class="card-grid">

    {% for post in posts %}
      <div class="card">

        <h3>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </h3>

        <p class="meta">
          {{ post.date | date: "%B %d, %Y" }}
        </p>

        <p>
          {{ post.excerpt | strip_html | truncate: 140 }}
        </p>

        <a href="{{ post.url }}" class="card-link">
          Read
        </a>

      </div>
    {% endfor %}

  </div>

  {% else %}

  <!-- EMPTY STATE -->
  <div class="card" style="max-width: 480px; margin-top: 40px;">
    <h3>No posts yet</h3>
    <p class="meta">
      Start publishing structured thinking to build your library.
    </p>
  </div>

  {% endif %}

</section>