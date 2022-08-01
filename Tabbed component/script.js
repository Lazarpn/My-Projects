'use strict';

const tabButtonsContainer = document.querySelector('.tab__buttons');
const tabButtons = document.querySelectorAll('.tab__button');
const tabsContent = document.querySelectorAll('.tab__content');
const tabsImages = document.querySelectorAll('.tabs__img');

tabButtonsContainer.addEventListener('click', function (e) {
  let clicked = e.target.closest('.tab__button');

  if (!clicked) return;

  // remove active class from button
  tabButtons.forEach(button => button.classList.remove('tab__button--active'));

  // remove active class from tab

  tabsContent.forEach(tab => tab.classList.remove('tab__content--active'));

  tabsImages.forEach(img => img.classList.remove('tabs__img--active'));

  //add active class to clicked

  clicked.classList.add('tab__button--active');

  // determine data set atribute and add to coresponding tab

  document
    .querySelector(`.tab__content--${clicked.dataset.tab}`)
    .classList.add('tab__content--active');

  document
    .querySelector(`.tabs__img--${clicked.dataset.tab}`)
    .classList.add('tabs__img--active');
});
