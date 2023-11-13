const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
    }
  });
});

const appearOnScroll = document.querySelectorAll('.fade-in');
appearOnScroll.forEach((el) => observer.observe(el));