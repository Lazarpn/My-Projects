'use strict';

const btnRight = document.querySelector('.reviews__button--right');
const btnLeft = document.querySelector('.reviews__button--left');
const btnSurprise = document.querySelector('.reviews__button--surprise');
const reviews = document.querySelectorAll('.review');

let counter = 0;

const goToSlide = function (slide) {
  reviews.forEach(review => review.classList.remove('review--active'));
  document.querySelector(`.review--${slide}`).classList.add('review--active');
};

goToSlide(counter);

const goToRandom = function () {
  let random = Math.round(Math.random() * 3);

  if (random === counter && counter === 3) random--;
  if (random === counter && counter !== 3) random++;

  if (random === counter && counter === 0) random++;
  if (random === counter && counter !== 0) random--;

  counter = random;

  goToSlide(counter);
};

const nextSlide = function () {
  if (counter === reviews.length - 1) {
    counter = 0;
  } else {
    counter++;
  }

  goToSlide(counter);
};

const previousSlide = function () {
  if (counter === 0) {
    counter = reviews.length - 1;
  } else {
    counter--;
  }

  goToSlide(counter);
};

btnLeft.addEventListener('click', previousSlide);
btnRight.addEventListener('click', nextSlide);
btnSurprise.addEventListener('click', goToRandom);
