/* THINGS TO IMPROVE FURTHER INTO DEVELOPMENT */
// 1. Placement of DOM elements, currently have them all inside
// displayController. Maybe make a sep object just to hold them, and
// it as displayControllers protoype ?

// Module to store gameboard
const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  return { board };
})();

// Factory function to create players
const playerFactory = (name, marker) => ({ name, marker });

// Module that gives functionality to game
const gamePlay = (() => {
  // the game is played here without updating DOM
  const player1 = playerFactory('User1', 'X');
  const player2 = playerFactory('User2', 'O');
  const currentPlayer = player1;
})();

// Module that reflects game moves to the DOM
const displayController = (() => {
  const startMenu = document.querySelector('.start-menu');
  const typeMenu = document.querySelector('.game-type-menu');
  const startBtn = document.querySelector('.start-btn');
  const pvpBtn = document.querySelector('.pvp-game');
  const gameGrid = document.querySelector('.game-grid');
  const gameTitle = document.querySelector('.game-title');
  const header = document.querySelector('header');

  const startGame = startBtn.addEventListener('click', () => {
    startMenu.style.display = 'none';
    typeMenu.style.display = 'block';
  });

  const startPvp = pvpBtn.addEventListener('click', () => {
    typeMenu.style.display = 'none';
    header.appendChild(gameTitle);
    displayController.fillDisplay();
  });

  const fillDisplay = function () {
    gameGrid.style.display = 'grid';
    gameBoard.board.forEach((value, i) => {
      const gridCell = document.createElement('div');
      gridCell.setAttribute('data-index', i);
      gridCell.innerText = value;
      gameGrid.appendChild(gridCell);
    });
  };

  return {
    fillDisplay, startGame, startPvp, gameGrid,
  };
})();
