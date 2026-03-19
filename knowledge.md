---
layout: default
title: Knowledge System
permalink: /knowledge/
---

<section class="section-wide">

  <!-- HEADER -->
  <div class="page-header">
    <h1 class="page-title">Thinking System</h1>
    <p class="page-sub">
      Structured knowledge across strategy, AI, and execution
    </p>
  </div>

  <!-- 🔥 LAYOUT WRAPPER (CRITICAL) -->
  <div class="knowledge-layout">

    <!-- SIDEBAR -->
    <aside class="knowledge-sidebar">

      <div class="ks-title">Knowledge</div>

      <div class="ks-nav">
        <span class="ks-item active" data-filter="all">All</span>
        <span class="ks-item" data-filter="strategy">Strategy</span>
        <span class="ks-item" data-filter="ai">AI</span>
        <span class="ks-item" data-filter="systems">Systems</span>
      </div>

    </aside>

    <!-- CONTENT -->
    <div class="knowledge-content">

      <div class="card-grid" id="ksGrid">

        {% for post in site.posts %}
        <div class="card ks-card"
             data-category="{{ post.category }}"
             data-tags="{{ post.tags | join: ',' }}">

          <h3>
            <a href="{{ post.url }}">{{ post.title }}</a>
          </h3>

          <p class="meta">
            {{ post.date | date: "%B %d, %Y" }}
          </p>

          <p>
            {{ post.excerpt | strip_html | truncate: 140 }}
          </p>

          <div class="post-tags">
            {% for tag in post.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>

          <a href="{{ post.url }}" class="card-link">
            Read
          </a>

        </div>
        {% endfor %}

      </div>

    </div>

  </div>

</section>


<!-- FILTER SCRIPT -->
<script>
const items = document.querySelectorAll(".ks-item");
const cards = document.querySelectorAll(".ks-card");

items.forEach(item => {
  item.addEventListener("click", () => {

    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const filter = item.dataset.filter;

    cards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});
</script>