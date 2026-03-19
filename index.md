---
layout: default
title: Home
---


<!-- =========================================
     HERO
========================================= -->

<section class="hero hero-split">

  <!-- LEFT -->
  <div class="hero-left">
    <h1 class="hero-title">
      Thinking Systems for Strategy, AI & Execution
    </h1>

    <p class="hero-sub">
      A structured platform to master strategic thinking, AI, and problem solving
      through drills, systems, and real-world patterns.
    </p>

    <div class="hero-actions">
      <a href="/competencies/" class="btn-primary">Explore Systems</a>
      <a href="/about" class="btn-secondary">About</a>
    </div>
  </div>

  <!-- RIGHT (FEATURED - DYNAMIC) -->
  <div class="hero-right">

    {% assign featured = site.posts | where: "featured", true | first %}

    {% if featured %}
    <div class="featured-card">

      <div class="featured-label">Featured</div>

      <h3 class="featured-title">
        <a href="{{ featured.url }}">
          {{ featured.title }}
        </a>
      </h3>

      <p class="featured-desc">
        {{ featured.excerpt | strip_html | truncate: 140 }}
      </p>

      <a href="{{ featured.url }}" class="card-link">
        Read Insight
      </a>

    </div>
    {% else %}

    <!-- FALLBACK -->
    <div class="featured-card">

      <div class="featured-label">Featured</div>

      <h3 class="featured-title">
        No featured insight yet
      </h3>

      <p class="featured-desc">
        Publish your first flagship thinking piece to activate this section.
      </p>

    </div>

    {% endif %}

  </div>

</section>


<!-- =========================================
     CREDIBILITY
========================================= -->

<section class="section-wide credibility">

  <div class="cred-grid">

    <div class="cred-card">
      <div class="cred-number">1600+</div>
      <div class="cred-title">Strategic Drills Completed</div>
      <div class="cred-desc">
        Structured training across systems thinking, execution discipline, and AI.
      </div>
    </div>

    <div class="cred-card">
      <div class="cred-number">3</div>
      <div class="cred-title">Thinking Systems Built</div>
      <div class="cred-desc">
        Elite Think Tank, AI Mastery, and execution frameworks under development.
      </div>
    </div>

    <div class="cred-card">
      <div class="cred-number">Large Scale</div>
      <div class="cred-title">Team Building & Execution</div>
      <div class="cred-desc">
        Built and operationalized high-performing teams with execution rigor.
      </div>
    </div>

  </div>

</section>


<!-- =========================================
     DASHBOARD (CORE DIFFERENTIATOR)
========================================= -->

<section class="section-wide">

  <div class="dashboard">

    <div class="dashboard-header">
      <h2>Report Dashboard</h2>
      <div class="dashboard-sub">
        Live proof of thinking, systems, and execution capability
      </div>
    </div>

    <div class="dashboard-grid">

      <!-- Elite Think Tank -->
      <div class="dashboard-card">

        <div class="dashboard-top">
          <div class="dashboard-title">Elite Think Tank</div>
          <div class="badge">Foundation</div>
        </div>

        <div class="dashboard-meta">
          Strategic thinking · Decision systems · Cognitive drills
        </div>

        <div class="progress-block">
          <div class="progress-label">
            <span>Progress</span>
            <span>1600 drills</span>
          </div>

          <div class="progress-bar">
            <div class="progress" style="width: 62%"></div>
          </div>
        </div>

        <div class="dashboard-actions">
          <a href="/elite-think-tank-report/" class="btn-primary">
            View System
          </a>
          <a href="/reports/elite-think-tank-report/" class="btn-ghost">
            Progress
          </a>
        </div>

      </div>


      <!-- AI Mastery -->
      <div class="dashboard-card">

        <div class="dashboard-top">
          <div class="dashboard-title">AI Mastery</div>
          <div class="badge light">Building</div>
        </div>

        <div class="dashboard-meta">
          Applied AI · Execution systems · Real-world use cases
        </div>

        <div class="progress-block">
          <div class="progress-label">
            <span>Progress</span>
            <span>In Progress</span>
          </div>

          <div class="progress-bar">
            <div class="progress" style="width: 45%"></div>
          </div>
        </div>

        <div class="dashboard-actions">
          <a href="/ai-mastery-report/" class="btn-primary">
            View System
          </a>
          <a href="/reports/ai-mastery-report/" class="btn-ghost">
            Progress
          </a>
        </div>

      </div>

    </div>

  </div>

</section>