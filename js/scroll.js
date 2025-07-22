
  if (window.innerWidth < 768) {
    const cards = document.querySelectorAll('.box-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.5
    });

    cards.forEach(card => observer.observe(card));
  }