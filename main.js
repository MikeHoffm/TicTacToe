// DOM Elements
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const startMenu = document.querySelector('.start-menu');
const typeMenu = document.querySelector('.game-type-menu');

// DOM Buttons
const startBtn = document.querySelector('.start-btn');
const pvpBtn = document.querySelector('.pvp-game');
const pvcBtn = document.querySelector('.pvc-game');

/* START GAME */

startBtn.addEventListener('click', () => {
  startMenu.style.display = 'none';
  typeMenu.style.display = 'block';
});

pvpBtn.addEventListener('click', () => {
  typeMenu.style.display = 'none';
  // start a pvp game
  // put the game title, and restart button at top of page in header
  console.log('player v player game');
});

pvcBtn.addEventListener('click', () => {
  typeMenu.style.display = 'none';
  // clear dom
  // put the game title, and restart button at top of page in header
  // start a pvc game
  console.log('player v ai game');
});

// Module to store gameboard
const gameBoard = (() => {
  const board = ['x', 'o', 'o', 'x', 'x', 'o', 'o', 'x', 'x'];
  return { board };
})();

const displayController = (() => {
  // control the display by updating DOM

})();

// Factory function to create players
const playerFactory = (name, marker) => ({ name, marker });

const Game = (() => {
  const player1 = playerFactory('User1', 'X');
  const player2 = playerFactory('User2', 'O');
  const currentPlayer = player1;
})();
