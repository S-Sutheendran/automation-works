'use strict';

/*
console.log(document.querySelector('.message').textContent); // This will select element and then reads and displays text in the element. Left to right it will be executed

document.querySelector('.message').textContent = '🥳 Correct Number!'; // Manipulating the element

console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = 13;
document.querySelector('.highscore').textContent = 30;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Handling Click Events

// Function can be passed as a value also
// JS engine will call the function when he event is happening. The function is not automatically called.

let secretNumber = Math.trunc(Math.random() * 20 + 1); // Generates random number

let scoreCount = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value); // Concatenation from string to number
  // document.querySelector('.message').textContent = 'Output Got!';

  // console.log(guessNumber, typeof guessNumber);

  if (!guessNumber) {
    displayMessage('No Number! ⚠️');
  } else if (guessNumber == secretNumber) {
    displayMessage('Correct Number! 🥳');
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.score').textContent = scoreCount;
    document.querySelector('body').style.backgroundColor = '#70d67dff';
    document.querySelector('.number').style.width = '30rem';

    // Calculating Highscore value from Original Score
    if (scoreCount > highScore) {
      highScore = scoreCount;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== secretNumber) {
    if (scoreCount > 1) {
      displayMessage(
        guessNumber > secretNumber ? 'Too High! 📈' : 'Too Low! 📉'
      );
      scoreCount--;
      document.querySelector('.score').textContent = scoreCount;
    }
  } else {
    displayMessage('You lost the game! 💥');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1); //To set the secret number to the variable for next round
  scoreCount = 20;
  document.querySelector('.score').textContent = scoreCount;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
