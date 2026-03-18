---
layout: default
title: Theme Lab
permalink: /theme-lab/
sitemap: false
robots: noindex
---

<section class="theme-lab">

  <h1 class="hero-title">Theme System</h1>
  <p class="hero-sub">
    Internal design playground — visualizing all themes, surfaces, and components.
  </p>

  <div class="theme-grid">

    <!-- AUTO THEMES -->

    <div class="theme-tile" data-theme="indigo"><div class="theme-preview"></div><span>Indigo</span></div>
    <div class="theme-tile" data-theme="emerald"><div class="theme-preview"></div><span>Emerald</span></div>
    <div class="theme-tile" data-theme="slate"><div class="theme-preview"></div><span>Slate</span></div>
    <div class="theme-tile" data-theme="amber"><div class="theme-preview"></div><span>Amber</span></div>
    <div class="theme-tile" data-theme="rose"><div class="theme-preview"></div><span>Rose</span></div>
    <div class="theme-tile" data-theme="cyan"><div class="theme-preview"></div><span>Cyan</span></div>
    <div class="theme-tile" data-theme="mono"><div class="theme-preview"></div><span>Mono</span></div>
    <div class="theme-tile" data-theme="violet"><div class="theme-preview"></div><span>Violet</span></div>
    <div class="theme-tile" data-theme="oasis"><div class="theme-preview"></div><span>Oasis</span></div>
    <div class="theme-tile" data-theme="berry"><div class="theme-preview"></div><span>Berry</span></div>
    <div class="theme-tile" data-theme="delight"><div class="theme-preview"></div><span>Delight</span></div>
    <div class="theme-tile" data-theme="summer_sunset"><div class="theme-preview"></div><span>Summer Sunset</span></div>
    <div class="theme-tile" data-theme="adventure"><div class="theme-preview"></div><span>Adventure</span></div>
    <div class="theme-tile" data-theme="midnight"><div class="theme-preview"></div><span>Midnight</span></div>

  </div>

  <!-- LIVE PREVIEW -->
  <div class="theme-live-preview">

    <div class="card">
      <h3>Card Preview</h3>
      <p>This uses your real surface, border, and text tokens.</p>
      <a href="#" class="card-link">Explore</a>
    </div>

    <div style="margin-top:20px;">
      <a class="btn-primary">Primary</a>
      <a class="btn-secondary">Secondary</a>
    </div>

  </div>

</section>

<script>
document.querySelectorAll(".theme-tile").forEach(tile => {
  tile.addEventListener("click", () => {
    const theme = tile.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", theme);
  });
});
</script>