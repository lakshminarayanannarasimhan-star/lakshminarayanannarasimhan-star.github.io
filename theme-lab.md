---
layout: default
title: Theme Lab
permalink: /theme-lab/
sitemap: false
robots: noindex
---

<section class="theme-lab-pro">

  <!-- HEADER -->
  <div class="lab-header">
    <div>
      <h1>Design System</h1>
      <p>Theme engine · surfaces · interaction model</p>
    </div>
  </div>

  <!-- LAYOUT -->
  <div class="lab-layout">

    <!-- LEFT: THEME SELECTOR -->
    <div class="theme-sidebar">

      <div class="theme-group-title">Themes</div>

      <div class="theme-list">
        <div class="theme-item" data-theme="indigo">Indigo</div>
        <div class="theme-item" data-theme="emerald">Emerald</div>
        <div class="theme-item" data-theme="slate">Slate</div>
        <div class="theme-item" data-theme="amber">Amber</div>
        <div class="theme-item" data-theme="rose">Rose</div>
        <div class="theme-item" data-theme="cyan">Cyan</div>
        <div class="theme-item" data-theme="violet">Violet</div>
        <div class="theme-item" data-theme="berry">Berry</div>
        <div class="theme-item" data-theme="oasis">Oasis</div>
        <div class="theme-item" data-theme="delight">Delight</div>
        <div class="theme-item" data-theme="summer_sunset">Summer Sunset</div>
        <div class="theme-item" data-theme="adventure">Adventure</div>

        <div class="theme-group-title" style="margin-top:20px;">Dark</div>
        <div class="theme-item" data-theme="midnight">Midnight</div>
      </div>

    </div>

    <!-- RIGHT: LIVE SYSTEM -->
    <div class="theme-canvas">

      <!-- PRIMARY CARD -->
      <div class="card lab-card">
        <h3>System Card</h3>
        <p>
          This reflects your real surface, border, elevation and typography system.
        </p>

        <div style="margin-top:16px;">
          <a class="btn-primary">Primary Action</a>
          <a class="btn-secondary">Secondary</a>
        </div>
      </div>

      <!-- COMPONENT GRID -->
      <div class="lab-grid">

        <div class="card">
          <div class="meta">Surface</div>
          <h4>Base Layer</h4>
        </div>

        <div class="card">
          <div class="meta">Elevation</div>
          <h4>Hover System</h4>
        </div>

        <div class="card">
          <div class="meta">Accent</div>
          <h4>Primary Color</h4>
        </div>

      </div>

    </div>

  </div>

</section>

<script>
document.querySelectorAll(".theme-item").forEach(item => {
  item.addEventListener("click", () => {
    const theme = item.getAttribute("data-theme");

    document.documentElement.setAttribute("data-theme", theme);

    document.querySelectorAll(".theme-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
</script>