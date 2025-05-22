// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });
  
  // Sticky Header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.style.boxShadow =
      window.scrollY > 100
        ? '0 2px 10px rgba(0, 0, 0, 0.2)'
        : '0 2px 10px rgba(0, 0, 0, 0.1)';
  });
  
  // Animate on Scroll
  document.addEventListener('DOMContentLoaded', function () {
    const animateOnScroll = () => {
      document.querySelectorAll('.service-card, .facility-card, .trainer-card').forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight / 1.2) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    };
  
    document.querySelectorAll('.service-card, .facility-card, .trainer-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.5s ease';
    });
  
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once
  });
  