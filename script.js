/* MENU */
menuBtn.onclick = () => navMenu.classList.toggle("active");

/* CAROUSEL */
const slides = document.querySelectorAll(".slide");
let i = 0;
setInterval(() => {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}, 4500);

/* FAQ */
document.querySelectorAll(".faq-question").forEach(q => {
  q.onclick = () => {
    const a = q.nextElementSibling;
    a.style.display = a.style.display === "block" ? "none" : "block";
  };
});

/* SCROLL TOP */
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
