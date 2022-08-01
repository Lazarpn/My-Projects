"use strict";

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const input = document.querySelector(".form__input");
const slider = document.querySelector(".form__slider");

let x = 1;

input.addEventListener("click", function () {
  if (x === 1) {
    first.innerHTML = 19.99;
    second.innerHTML = 24.99;
    third.innerHTML = 39.99;
    x++;
  } else {
    first.innerHTML = 199.99;
    second.innerHTML = 249.99;
    third.innerHTML = 399.99;
    x--;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    first.innerHTML = 19.99;
    second.innerHTML = 24.99;
    third.innerHTML = 39.99;
    slider.style.setProperty("--left", "50%");
  } else if (e.key === "ArrowLeft") {
    first.innerHTML = 199.99;
    second.innerHTML = 249.99;
    third.innerHTML = 399.99;
    slider.style.setProperty("--left", "5%");
  }
});
