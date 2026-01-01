(function () {
  const drawer = document.getElementById("drawer");
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");
  const backdrop = document.getElementById("backdrop");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  function openDrawer() {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    openBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  openBtn?.addEventListener("click", openDrawer);
  closeBtn?.addEventListener("click", closeDrawer);
  backdrop?.addEventListener("click", closeDrawer);

  // Smooth scroll + close menu on nav click
  drawer?.addEventListener("click", (e) => {
    const target = e.target;
    if (!target?.classList?.contains("drawer__link")) return;

    e.preventDefault();
    const href = target.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    closeDrawer();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // ESC closes menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });
})();
