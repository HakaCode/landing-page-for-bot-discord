document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const body = document.querySelector("body");

  function showMenu() {
    navLinks.classList.add("active");
    body.addEventListener("click", hideMenuOnClickOutside);
  }

  function hideMenu() {
    navLinks.classList.remove("active");
    body.removeEventListener("click", hideMenuOnClickOutside);
  }

  function hideMenuOnClickOutside(event) {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
      hideMenu();
    }
  }

  hamburger.addEventListener("click", () => {
    if (!navLinks.classList.contains("active")) {
      showMenu();
    } else {
      hideMenu();
    }
  });
});
