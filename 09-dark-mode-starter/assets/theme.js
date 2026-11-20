// Dark-mode toggle. It flips data-theme on <html> and saves the choice.
// The first theme is set by the script in <head>, before the page is painted.
(() => {
  const toggle = document.querySelector("[data-theme-toggle]");
  const root = document.documentElement;

  const apply = (theme) => {
    const isDark = theme === "dark";
    root.dataset.theme = isDark ? "dark" : "light";
    if (toggle) toggle.setAttribute("aria-pressed", String(isDark));
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {
      // Storage is blocked. The toggle still works for this page view.
    }
  };

  // Show the button in the right state when the page loads.
  apply(root.dataset.theme === "dark" ? "dark" : "light");

  if (toggle) {
    toggle.addEventListener("click", () => {
      apply(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }
})();