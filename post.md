---
layout: default
title: Posts
permalink: /posts/
---

<section class="section-wide">

  <div class="page-header">
    <h1 class="page-title">Thinking Library</h1>
    <p class="page-sub">
      Strategy · Systems · First Principles · Execution
    </p>
  </div>

  {% assign posts = site.posts | where_exp: "post", "post.featured != true" %}

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

</section>