'use strict';

const timerDays = document.querySelector('.box__time--days');
const timerHours = document.querySelector('.box__time--hours');
const timerMins = document.querySelector('.box__time--mins');
const timerSecs = document.querySelector('.box__time--secs');

const startTimer = function () {
  const tick = function () {
    let days = String(Math.trunc(time / (60 * 60 * 24))).padStart(2, 0);
    let hours = String(
      Math.trunc((time % (60 * 60 * 24)) / (60 * 60))
    ).padStart(2, 0);
    let mins = String(Math.trunc((time % (60 * 60)) / 60)).padStart(2, 0);
    let secs = String(Math.trunc(time % 60)).padStart(2, 0);

    timerDays.textContent = `${days}`;
    timerHours.textContent = `${hours}`;
    timerMins.textContent = `${mins}`;
    timerSecs.textContent = `${secs}`;

    time--;

    if (time === 0) {
      clearInterval(timer);
    }
  };

  let time = 864_000;

  tick();

  const timer = setInterval(tick, 1000);

  return timer;
};

startTimer();
