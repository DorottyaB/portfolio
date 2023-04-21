const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelectorAll('.nav-link');
const cardImages = document.querySelectorAll('.card-image');
const toTopBtn = document.querySelector('.back-to-top');

function toggleNav() {
  document.querySelector('body').classList.toggle('no-scroll');
  document.querySelector('.navigation').classList.toggle('hidden');
  navIcon.classList.toggle('close');
}

navIcon.addEventListener('click', toggleNav);

if (window.innerWidth < 1024) {
  navLinks.forEach(link => {
    link.addEventListener('click', toggleNav);
  });

  cardImages.forEach(image => {
    image.addEventListener('click', () => {
      const description = image.children[1];
      description.classList.toggle('animate');
    });
  });
}

if (window.innerWidth >= 1024) {
  document.querySelector('.navigation').classList.remove('hidden');
}

const today = new Date();
const year = today.getFullYear();
document.getElementById('year').textContent = year;

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
  cardImages.forEach(item => {
    fadeUpObserver.observe(item);
  });
}

function showOnScroll() {
  const y = window.scrollY;
  if (y >= 1000) {
    toTopBtn.className = 'back-to-top show';
  } else {
    toTopBtn.className = 'back-to-top hide';
  }
}

window.addEventListener('scroll', showOnScroll);

toTopBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
