const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelectorAll('.nav-link');
const cardImages = document.querySelectorAll('.card-image');

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
