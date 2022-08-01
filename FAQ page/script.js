const btnsOpen = document.querySelectorAll('.question__icon--plus');
const btnsClose = document.querySelectorAll('.question__icon--minus');
const questionsContainer = document.querySelector('.header__centered');
const questions = document.querySelectorAll('.question');
const questionsContents = document.querySelectorAll('.question__text');

questionsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.question__icon');
  if (!clicked) return;

  const openQuestion = function () {
    btnsOpen.forEach(btn => btn.classList.remove('hidden'));
    btnsClose.forEach(btn => btn.classList.add('hidden'));

    questionsContents.forEach(content => content.classList.add('hidden'));
    clicked
      .closest('.question')
      .querySelector('.question__text')
      .classList.remove('hidden');
    clicked.classList.add('hidden');
    clicked.nextElementSibling.classList.remove('hidden');
  };

  const closeQuestion = function () {
    clicked
      .closest('.question')
      .querySelector('.question__text')
      .classList.add('hidden');

    clicked.classList.add('hidden');
    clicked.previousElementSibling.classList.remove('hidden');
  };

  if (clicked.classList.contains('question__icon--plus')) openQuestion();
  if (clicked.classList.contains('question__icon--minus')) closeQuestion();
});
