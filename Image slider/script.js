'use strict';

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

let curSlide = 0;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
  );
};

const createDots = function () {
  slides.forEach((_, i) =>
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide='${i}'></button>`
    )
  );
};

const activeDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

goToSlide(curSlide);
createDots();
activeDot(curSlide);

const nextSlide = function () {
  if (curSlide === slides.length - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activeDot(curSlide);
};

const previousSlide = function () {
  if (curSlide === 0) {
    curSlide = slides.length - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activeDot(curSlide);
};

btnLeft.addEventListener('click', previousSlide);
btnRight.addEventListener('click', nextSlide);
dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activeDot(slide);
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') previousSlide();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') nextSlide();
});
