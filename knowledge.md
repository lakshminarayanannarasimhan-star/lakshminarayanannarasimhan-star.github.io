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
    <div class="ks-search">
  <input type="text" id="searchInput" placeholder="Search thinking..." />
</div>

      <div class="card-grid" id="ksGrid">

        {% for post in site.posts %}
        <div class="card ks-card"
        id="{{ post.category }}"
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
              <span class="tag" data-tag="{{ tag }}">{{ tag }}</span>
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


<script>
const items = document.querySelectorAll(".ks-item");
const cards = document.querySelectorAll(".ks-card");

// CLICK FILTER (existing behavior)
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

// 🔥 SCROLL ACTIVE (NEW)
window.addEventListener("scroll", () => {
  let current = "all";

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();

    if (rect.top < 200) {
      current = card.dataset.category;
    }
  });

  items.forEach(item => {
    item.classList.remove("active");

    if (item.dataset.filter === current) {
      item.classList.add("active");
    }
  });
});
</script>

<script>
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
</script>

<script>
const tags = document.querySelectorAll(".tag");

tags.forEach(tag => {
  tag.addEventListener("click", () => {
    const selected = tag.dataset.tag;

    cards.forEach(card => {
      const tags = card.dataset.tags;

      if (tags.includes(selected)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
</script>