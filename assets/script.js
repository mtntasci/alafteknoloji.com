const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
menuBtn?.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
