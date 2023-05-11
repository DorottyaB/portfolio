const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelectorAll('.nav-link');
const cards = document.querySelectorAll('.card');
const titles = document.querySelectorAll('.title h2');
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
}

const today = new Date();
const year = today.getFullYear();
document.getElementById('year').textContent = year;

function slideInObserverCallback(elsToWatch) {
  elsToWatch.forEach(el => {
    if (el.isIntersecting) {
      if (el.target.classList.contains('from-right')) {
        el.target.classList.add('slide-in-right');
      } else if (el.target.classList.contains('from-left')) {
        el.target.classList.add('slide-in-left');
      } else {
        el.target.classList.add('bounce-top');
      }
      slideInObserver.unobserve(el.target);
    }
  });
}

const slideInObserverOptions = {
  threshold: 0.3,
};

const slideInObserver = new IntersectionObserver(slideInObserverCallback, slideInObserverOptions);

titles.forEach(title => {
  slideInObserver.observe(title);
});

if (window.innerWidth >= 1024) {
  document.querySelector('.navigation').classList.remove('hidden');

  cards.forEach(item => {
    slideInObserver.observe(item);
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
