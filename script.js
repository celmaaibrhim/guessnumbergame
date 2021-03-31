'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const calcSecretNumber = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // WHEN THERE IS NO INPUT
    if (!guess) {
      displayMessage('⚠️ No number!');

      // WHEN GUESS IS CORRECT
    } else if (guess === secretNumber) {
      displayMessage('🥳 Correct!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score; // important otherwise highscore will change to current score even if lower
        document.querySelector('.highscore').textContent = score;
      }
      // WHEN GUESS IS INCORRECT
    } else if (guess !== secretNumber) {
      if (score > 1) {
        guess > secretNumber
          ? displayMessage('Guess too high!')
          : displayMessage('Guess too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥You lost this game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
