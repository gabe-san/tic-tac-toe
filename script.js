/* pseudocode

0-0 | 0-1 | 0-2
1-0 | 1-1 | 1-2
2-0 | 2-1 | 2-2
logic: fastest win is 5 turns
draw: turn 9
win conditions: 3 in a row: rows, columns, anti/ diagonals
function checkRow() {
  for (let i = 0;)
}
function checkCol() {

}
function checkDiag() {

}
funtion checkAntiDiag() {

}

check/clear gameBoard if not starting new game




IIFE:
const gameBoard = (() => {
  const updateScreen = (playerChoice input) => {
    const buttonRender = document.querySelector("#button");
    buttonRender.textContent = "";
    if (x != X or O or empty) {
      buttonRender.textContent = (`${player1 or 2 input}`)
    } 
  }
  const appendTurnInput = () => {
    if (playerInput was just made) {
      const buttonLockout = document.querySelector("#previousButton");
      buttonLockout = toggle inactive to prevent overwriting previous Input;
    }
    return switch to other player function (probably keep track of player turn in an array and whenever a turn is completed, loop through i++)
  }
  const turnCounter = () => { (0 = player X turn, each input increments counter by 1 until game won(3 in a row) or out of spaces(8))
    let count = 0;
    return () => {
      count++;
    }
  };
})();


const buttonInput = document.querySelectorAll("buttons")
buttonInput.forEach(button => {
    button.addEventListener('click', () => {
      gameBoard.updateScreen()
      gameBoard.appendTurnInput
      gameBoard.turnCounter()
    })
})

*/

const Player = (input) => {
  this.input = input;
  const getInput = () => input;
  return {
    getInput
  };
};

const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne;
let board;
let gameOver = false;

// Define gameBoard
const gameBoard = (() => {
  const rows = 3;
  const columns = 3;
  board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(' ');

      const tile = document.createElement('button');
      tile.id = `${i.toString()}-${j.toString()}`; // helps for checking gameState via algorithm
      tile.classList.add('tile');
      tile.addEventListener('click', addPlayerInput)
      document.querySelector('.gameBoard').appendChild(tile);
    }
  }
  const writeToDOM = (selector, message) => {
    document.querySelector(selector).innerHTML = message;
  }
  return {
    writeToDOM
  }
})();

function addPlayerInput() {
  if (gameOver) {
    return;
  }
  const gameInputCoord = this.id.split('-');
  const r = parseInt(gameInputCoord[0], 10);
  const c = parseInt(gameInputCoord[1], 10);
  if (board[r][c] !== ' ') {
    return;
  }
  board[r][c] = currentPlayer;
  this.innerHTML = currentPlayer;
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
  }
  else {
    currentPlayer = playerOne;
  }
  checkGameState();
}

function checkGameState() {
  // horizontal
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== ' ') {
      for (let j = 0; j < 3; j++) {
        const tile = document.getElementById(`${i.toString()}-${j.toString()}`)
        tile.classList.add('winningTiles');
      }
      gameOver = true;
      return;
    }
  }
  // vertical
  for (let j = 0; j < 3; j++) {
    if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== ' ') {
      for (let i = 0; i < 3; i++) {
        const tile = document.getElementById(`${i.toString()}-${j.toString()}`)
        tile.classList.add('winningTiles');
      }
      gameOver = true;
      return;
    }
  }
  // diagonal
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== ' ') {
    for (let i = 0; i < 3; i++) {
      const tile = document.getElementById(`${i.toString()}-${i.toString()}`)
      tile.classList.add('winningTiles');
    }
    gameOver = true;
    return;
  }
  // antidiag
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== ' ') {
    let tile = document.getElementById('0-2');
    tile.classList.add('winningTiles');
    tile = document.getElementById('1-1');
    tile.classList.add('winningTiles');
    tile = document.getElementById('2-0');
    tile.classList.add('winningTiles');
    gameOver = true;

  }
}
