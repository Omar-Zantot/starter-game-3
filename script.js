'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // using getElementByID !

const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

// Strating conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = Number(!activePlayer);
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// rolling dice functionality
btnRollEl.addEventListener('click', function () {
  // 1. generating a rundom dice roll

  const diceNum = Math.trunc(Math.random() * 6) + 1;
  0;
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNum}.png`;

  // 3. Check for rolled 1
  if (diceNum !== 1) {
    // add dice to current score
    currentScore += diceNum;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHoldEl.addEventListener('click', function () {
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. check if the player's Score is >= 100
  if (!(scores[activePlayer] >= 100)) {
    switchPlayer();
  } else {
    // 1- player--winner
    document
      .querySelector(`player--${activePlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`player--${activePlayer}`)
      .classList.remove('player--active');
  }
  // finish the game
  // switch to next player
});
