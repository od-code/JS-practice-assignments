'use strict';
// A modal of how to play the game
const btnShowModal = document.querySelector('.instruction');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
// Playing the game
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

// Initializing the scores variable
let currentScore = 0;
//  Implementing the game logic
diceEl.classList.add('hidden');
btnRoll.addEventListener('click', function () {
  let randomDiceRoll = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${randomDiceRoll}.png`;
  diceEl.classList.remove('hidden');
  if (randomDiceRoll !== 1) {
    currentScore += randomDiceRoll;
    currentScore0.textContent = currentScore;
  } else {
  }
});

// HOW TO PLAY THE GAME MODAL
btnShowModal.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
//  Closing the modal
let modalClose = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', modalClose);
overlay.addEventListener('click', modalClose);
// When pressing the escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClose();
  }
});
