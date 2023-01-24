import './style.css';

const img = document.querySelector('.wrapper_image img');
const prev = document.querySelector('.wrapper_image_prev');
const next = document.querySelector('.wrapper_image_next');
const wrapDots = document.querySelector('.wrapper_dots');
const images = ['../src/images/Lam0.jpg','../src/images/Lam1.jpg','../src/images/Lam2.jpg','../src/images/Lam3.jpg',
               '../src/images/Lam4.jpg','../src/images/Lam5.jpg','../src/images/Lam6.jpg','../src/images/Lam7.jpg'];


for (let i = 0; i < images.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  wrapDots.appendChild(dot);
}
const dots = document.querySelectorAll('.dot');
let count = images.indexOf('../src' + img.src.replace(/.*src/, ''));

dots[count].classList.add('active');
next.addEventListener('click', function (ev) {
  ev.preventDefault();
  count++;
  if (count > images.length - 1) {
    count = 0;
  }

  dots[count].classList.add('active');

  if (count === 0) {
    dots[images.length - 1].classList.remove('active');
  } else {
    dots[count - 1].classList.remove('active');
  }

  img.src = images[count];
})

prev.addEventListener('click', function (ev) {
  ev.preventDefault();
  count--;
  if (count < 0) {
    count = images.length - 1;
  }

  dots[count].classList.add('active');

  if (count === images.length - 1) {
    dots[0].classList.remove('active');
  } else {
    dots[count + 1].classList.remove('active');
  }

  img.src = images[count];
})
