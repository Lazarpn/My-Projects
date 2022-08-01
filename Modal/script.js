'use strict';

const modal = document.querySelector('.modal');
const buttonsAll = document.querySelector('.header__buttons');
const buttonOpenModal = document.querySelector('.btn--open-modal');
const buttonsCloseModal = document.querySelectorAll('.btn--close-modal');
const overlay = document.querySelector('.overlay');

const displayModal = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

const removeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

buttonsAll.addEventListener('click', function (e) {
  e.preventDefault();
  if (!e.target.classList.contains('btn--open-modal')) return;
  displayModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) removeModal();
});

overlay.addEventListener('click', function (e) {
  if (!modal.classList.contains('hidden')) removeModal();
});

// modal.addEventListener('click', function (e) {
//   if (!e.target.classList.contains('btn--close-modal')) return;
//   removeModal();
// });

buttonsCloseModal.forEach(btn => btn.addEventListener('click', removeModal));
