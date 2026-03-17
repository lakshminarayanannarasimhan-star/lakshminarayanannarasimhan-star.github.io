document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".flip-card");
  const buttons = document.querySelectorAll(".filter-btn");

  let activeFilters = new Set();

  // Flip logic
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Filter logic (multi-select)
  buttons.forEach(button => {
    button.addEventListener("click", () => {

      const filter = button.getAttribute("data-filter");

      // Toggle active state
      if (filter === "all") {
        activeFilters.clear();
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
      } else {
        button.classList.toggle("active");

        // Remove "All" active if selecting specific filters
        document.querySelector('[data-filter="all"]').classList.remove("active");

        if (activeFilters.has(filter)) {
          activeFilters.delete(filter);
        } else {
          activeFilters.add(filter);
        }
      }

      applyFilters();
    });
  });

  function applyFilters() {
    cards.forEach(card => {
      const tags = card.getAttribute("data-tags");

      if (activeFilters.size === 0) {
        showCard(card);
        return;
      }

      // Match ANY selected filter
      const match = [...activeFilters].some(f => tags.includes(f));

      if (match) {
        showCard(card);
      } else {
        hideCard(card);
      }
    });
  }

  function showCard(card) {
    card.classList.remove("hidden");
  }

  function hideCard(card) {
    card.classList.add("hidden");
  }

});