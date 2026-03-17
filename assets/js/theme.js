/* =========================================
   ELEVATE — CORE JS (FINAL)
   ========================================= */


/* =========================
   HEADER SCROLL BEHAVIOR
   ========================= */

(function () {
  const header = document.querySelector(".header");

  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
})();


/* =========================
   ACTIVE NAV HIGHLIGHT
   ========================= */

(function () {
  const links = document.querySelectorAll(".nav a");
  const currentPath = window.location.pathname.replace(/\/$/, "");

  links.forEach(link => {
    let href = link.getAttribute("href");

    if (!href) return;

    href = href.replace(/\/$/, "");

    if (
      href === currentPath ||
      (href !== "" && href !== "/" && currentPath.startsWith(href))
    ) {
      link.classList.add("active");
    }
  });
})();


/* =========================
   SMOOTH SCROLL
   ========================= */

(function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.length > 1) {
        const target = document.querySelector(targetId);

        if (target) {
          e.preventDefault();

          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
          });
        }
      }
    });
  });
})();