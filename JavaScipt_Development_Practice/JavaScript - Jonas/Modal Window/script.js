'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
// const buttonOpenModal = document.querySelector('.show-modal'); // This has 3 similar elements

const buttonOpenModal = document.querySelectorAll('.show-modal');

// console.log(buttonOpenModal); // This displays in array

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden'); // This is to remove a specific class
  overlay.classList.remove('hidden'); // To remove the overlay hidden class
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// To display the buttons in seperate elements
for (let i = 0; i < buttonOpenModal.length; i++) {
  buttonOpenModal[i].addEventListener('click', openModal); //We declare/define the function and do not call the function
}

// This is to close the overlay and modal popup
buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed'); //This will print when any key is pressed
  // console.log(e.key); // This shows the object with which key is pressed

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log("Esc was pressed");
    closeModal();
  }
});
