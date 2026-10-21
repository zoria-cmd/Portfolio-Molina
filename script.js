document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const backToTopBtn = document.getElementById("back-to-top");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      menuBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      menuBtn.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");
        menuBtn.textContent = "☰";
      });
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const lightMode = document.body.classList.contains("light-mode");
      themeToggle.textContent = lightMode ? "☾" : "☼";
      themeToggle.setAttribute("aria-label", lightMode ? "Switch to dark theme" : "Switch to light theme");
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.querySelectorAll('a[href="#home"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});