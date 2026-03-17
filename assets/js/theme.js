const themes = [
  "indigo",
  "emerald",
  "slate",
  "midnight",
  "amber",
  "rose",
  "cyan",
  "mono"
];

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Toggle theme
let index = 0;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("theme-toggle");

  // set index based on current theme
  const currentTheme = document.documentElement.getAttribute("data-theme") || "indigo";
  index = themes.indexOf(currentTheme);

  button.onclick = () => {
    index = (index + 1) % themes.length;
    const newTheme = themes[index];

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
});