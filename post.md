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

  <!-- FILTER BAR -->
  <div class="filter-bar">

    <!-- CATEGORY FILTER -->
    <select id="categoryFilter">
      <option value="">All Categories</option>
      <option value="strategy">Strategy</option>
      <option value="ai">AI</option>
      <option value="systems">Systems</option>
    </select>

    <!-- TAG FILTER -->
    <select id="tagFilter">
      <option value="">All Tags</option>
      <option value="first-principles">First Principles</option>
      <option value="execution">Execution</option>
      <option value="decision-making">Decision Making</option>
    </select>

  </div>

  <!-- POSTS GRID -->
  <div class="card-grid" id="postsGrid">

    {% assign posts = site.posts | where_exp: "post", "post.featured != true" %}

    {% for post in posts %}
    <div class="card"
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

      <!-- TAGS -->
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

</section>


<!-- FILTER SCRIPT -->
<script>
const categoryFilter = document.getElementById("categoryFilter");
const tagFilter = document.getElementById("tagFilter");
const posts = document.querySelectorAll("#postsGrid .card");

function filterPosts() {
  const category = categoryFilter.value;
  const tag = tagFilter.value;

  posts.forEach(post => {
    const postCategory = post.dataset.category;
    const postTags = post.dataset.tags;

    const matchCategory = !category || postCategory === category;
    const matchTag = !tag || postTags.includes(tag);

    if (matchCategory && matchTag) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}

categoryFilter.addEventListener("change", filterPosts);
tagFilter.addEventListener("change", filterPosts);
</script>