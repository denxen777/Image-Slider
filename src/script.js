import './style.css';

const img = document.querySelector('.wrapper_image img');
const prev = document.querySelector('.wrapper_image_prev');
const next = document.querySelector('.wrapper_image_next');
const wrapDots = document.querySelector('.wrapper_dots');
const images = ['../src/images/Lam0.jpg', '../src/images/Lam1.jpg', '../src/images/Lam2.jpg', '../src/images/Lam3.jpg',
  '../src/images/Lam4.jpg', '../src/images/Lam5.jpg', '../src/images/Lam6.jpg', '../src/images/Lam7.jpg'];


for (let i = 0; i < images.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  wrapDots.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');
let count = 0;
img.src = images[count];
dots[count].classList.add('active');

next.addEventListener('click', (ev) => monoton(ev, 1));
prev.addEventListener('click', (ev) => monoton(ev, -1));

const monoton = (ev, difference) => {
  ev.preventDefault();
  dots[count].classList.remove('active');
  count = count + difference;
  if (count < 0) {
    count = images.length - 1;
  }
  if (count > images.length - 1) {
    count = 0;
  }
  dots[count].classList.add('active');
  img.src = images[count];
}