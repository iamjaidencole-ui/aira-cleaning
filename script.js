(function () {
  "use strict";

  /* =====================
     STICKY NAVBAR
  ===================== */
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      navbar.classList.add("sticky-active");
    } else {
      navbar.classList.remove("sticky-active");
    }
  });

  /* =====================
     ACTIVE NAV LINK ON SCROLL
  ===================== */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function activateNavLink() {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateNavLink);

  /* =====================
     AUTO CLOSE MOBILE MENU
  ===================== */
  const navItems = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarCollapse");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });

  /* =====================
     MODAL VIDEO RESET
  ===================== */
  const modal = document.getElementById("exampleModal");
  const video = document.getElementById("VisaChipCardVideo");

  if (modal && video) {
    modal.addEventListener("hidden.bs.modal", () => {
      video.pause();
      video.currentTime = 0;
    });
  }

})();
