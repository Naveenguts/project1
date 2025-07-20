// script.js
// Add any interactive JS for your portfolio here

// Example: Smooth scroll for anchor links
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    // Only prevent default for anchor links inside the same page
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});


// Example: Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.offsetHeight;
    const navLink = document.querySelector('.navbar a[href="#' + section.id + '"]');
    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
});
