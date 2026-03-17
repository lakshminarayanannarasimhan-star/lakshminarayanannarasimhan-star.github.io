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

  // Toggle menu
  button.onclick = () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  };

  // Select theme
  options.forEach(opt => {
    opt.onclick = () => {
      const theme = opt.dataset.theme;

      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);

      // Update active state
      options.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");

      menu.style.display = "none";
    };
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !button.contains(e.target)) {
      menu.style.display = "none";
    }
  });

});