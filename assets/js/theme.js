document.addEventListener("DOMContentLoaded", () => {

  const root = document.documentElement;
  const button = document.getElementById("theme-button");
  const menu = document.getElementById("theme-menu");
  const options = menu.querySelectorAll("div");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "indigo";
  root.setAttribute("data-theme", savedTheme);

  // Highlight active
  options.forEach(opt => {
    if (opt.dataset.theme === savedTheme) {
      opt.classList.add("active");
    }
  });

  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !button.contains(e.target)) {
      menu.style.display = "none";
    }
  });

});