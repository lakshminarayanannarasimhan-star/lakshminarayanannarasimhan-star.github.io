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
      Building The Indispensable System
    </h1>

    <p class="hero-sub">
      Turning ambiguity into execution through structured thinking systems.  
      Converting strategy into decisions, and decisions into outcomes.
    </p>

    <div class="hero-actions">
      <a href="/system/" class="btn-primary">Explore the System</a>
      <a href="/posts/" class="btn-secondary">View Applications</a>
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
     SYSTEM PREVIEW
========================================= -->

<section class="section-wide">

 <div class="system-flow">

  <div class="flow-card step-1">Ambiguity</div>
  <div class="flow-arrow">→</div>

  <div class="flow-card step-2">Structure</div>
  <div class="flow-arrow">→</div>

  <div class="flow-card step-3">Decision</div>
  <div class="flow-arrow">→</div>

  <div class="flow-card step-4">Execution</div>
  <div class="flow-arrow">→</div>

  <div class="flow-card step-5">Feedback</div>

</div>

</section>

<!-- =========================================
     POSITIONING
========================================= -->

<section class="section-wide">

  <div class="cred-grid">

    <div class="cred-card">
      <div class="cred-title">System Design</div>
      <div class="cred-desc">
        Building structured frameworks that convert strategy into execution.
      </div>
    </div>

    <div class="cred-card">
      <div class="cred-title">Decision Systems</div>
      <div class="cred-desc">
        Designing repeatable decision-making models under complexity.
      </div>
    </div>

    <div class="cred-card">
      <div class="cred-title">Execution Architecture</div>
      <div class="cred-desc">
        Translating systems into real-world execution and outcomes.
      </div>
    </div>

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
        Structured training across systems thinking, execution discipline, and decision frameworks.
      </div>
    </div>

    <div class="cred-card">
      <div class="cred-number">3</div>
      <div class="cred-title">Systems Built</div>
      <div class="cred-desc">
        Think Tank, AI Mastery, and execution systems under continuous development.
      </div>
    </div>

    <div class="cred-card">
      <div class="cred-number">Execution</div>
      <div class="cred-title">Real-World Application</div>
      <div class="cred-desc">
        Built and operationalized systems with real execution outcomes.
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
      <h2>System Dashboard</h2>
      <div class="dashboard-sub">
        Live proof of thinking systems, decision frameworks, and execution capability
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
          Applied systems · Workflow design · Execution frameworks
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