'use strict';
const btnShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// loop through the buttons and showing the modal
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', function () {
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
