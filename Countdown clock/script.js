'use strict';

const buttons = document.querySelector('.buttons');
const btnDecrease = document.querySelector('.btn--decrease');
const btnReset = document.querySelector('.btn--reset');
const btnIncrease = document.querySelector('.btn--increase');
const countingNumber = document.querySelector('.counting-number');

// 1st way

let counter = 0;
/*
btnDecrease.addEventListener('click', function () {
  if (counter === 0) return;
  counter -= 1;
  countingNumber.textContent = `${counter}`;
});
btnReset.addEventListener('click', function () {
  counter = 0;
  countingNumber.textContent = `${counter}`;
});
btnIncrease.addEventListener('click', function () {
  counter += 1;
  countingNumber.textContent = `${counter}`;
});
*/
// 2nd way

buttons.addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn')) return;
  let operator = e.target.dataset.operator;

  if (operator === 'reset') {
    counter = 0;
    countingNumber.textContent = `${counter}`;
  } else if (operator === '+') {
    counter += 1;
    countingNumber.textContent = `${counter}`;
  } else if (operator === '-' && counter !== 0) {
    counter -= 1;
    countingNumber.textContent = `${counter}`;
  }
});
