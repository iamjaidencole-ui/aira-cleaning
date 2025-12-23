// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Reveal-on-scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.15 });
reveals.forEach(r => observer.observe(r));

// Scroll to top
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top:0, behavior:'smooth' });
});
