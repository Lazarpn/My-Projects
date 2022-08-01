'use strict';

const btnFlipper = document.querySelector('.btn--flipper');
const colorName = document.querySelector('.color-name');
const header = document.querySelector('.header');

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max + 1 - min) + min);

const rgbaColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

const hexColor = function () {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.trunc(Math.random() * 16)];
  }
  return color;
};

const changeUI = function () {
  colorName.textContent = hexColor();
  header.style.backgroundColor = `${hexColor()}`;
};

btnFlipper.addEventListener('click', changeUI);
