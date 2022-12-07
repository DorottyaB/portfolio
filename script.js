function fadeUpObserverCallback(elsToWatch) {
  elsToWatch.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('scale-up');
      fadeUpObserver.unobserve(el.target);
      el.target.addEventListener(
        'transitionend',
        () => {
          el.target.classList.remove('scale-up');
        },
        { once: true }
      );
    }
  });
}

const fadeUpObserverOptions = {
  threshold: 0.6,
};

const fadeUpObserver = new IntersectionObserver(fadeUpObserverCallback, fadeUpObserverOptions);

if (window.innerWidth < 1024) {
  document.querySelectorAll('.card-image').forEach(item => {
    fadeUpObserver.observe(item);
  });
}
