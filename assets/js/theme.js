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

/* =========================
   MOBILE NAVIGATION (FINAL CLEAN)
   ========================= */

(function () {
  console.log("Mobile nav init");

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  const overlay = document.getElementById("nav-overlay");

  if (!toggle || !nav || !overlay) {
    console.log("Nav elements missing");
    return;
  }

  toggle.addEventListener("click", () => {
    console.log("Toggle clicked");

    nav.classList.toggle("open");
    overlay.classList.toggle("open");
  });

  overlay.addEventListener("click", () => {
    nav.classList.remove("open");
    overlay.classList.remove("open");
  });

})();

(function () {
  const links = document.querySelectorAll(".ks-item");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
})();

/* =========================================
   READING PROGRESS
   ========================================= */

(function () {
  const bar = document.querySelector(".reading-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = progress + "%";
  });
})();

/* =========================================
   TABLE OF CONTENTS
   ========================================= */

(function () {
  const content = document.getElementById("postContent");
  const toc = document.getElementById("tocList");

  if (!content || !toc) return;

  const headings = content.querySelectorAll("h2, h3");

  headings.forEach((heading, index) => {
    const id = "section-" + index;
    heading.id = id;

    const link = document.createElement("a");
    link.href = "#" + id;
    link.textContent = heading.textContent;

    if (heading.tagName === "H3") {
      link.style.marginLeft = "12px";
    }

    toc.appendChild(link);
  });

  /* ACTIVE HIGHLIGHT */
  window.addEventListener("scroll", () => {
    let current = "";

    headings.forEach(heading => {
      const rect = heading.getBoundingClientRect();

      if (rect.top < 120) {
        current = heading.id;
      }
    });

    const links = toc.querySelectorAll("a");

    links.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

})();