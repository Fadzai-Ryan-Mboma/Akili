// Header scroll effect
const header = document.getElementById('site-header');

window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Scroll-triggered animations via IntersectionObserver
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('[data-animate]').forEach(function (el) {
  observer.observe(el);
});
