/* eslint-disable no-param-reassign */
/* pseudocode
 TO DO: git clone project template and update after tic tac toe finished
*/
const Player = (input) => {
  this.input = input;
  const getInput = () => input;
  return {
    getInput
  };
};

const playerOne = Player('X');
const playerTwo = Player('O');
let currentPlayer = playerOne.getInput();
let board;
let gameOver = false;
let turn = 0;

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
  const checkFull = (array) => array.every(row => row.every(cell => cell !== ' ')); // nested every to check every cell in each row
  return {
    checkFull
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
  if (currentPlayer === playerOne.getInput()) {
    currentPlayer = playerTwo.getInput();
    turn++;
  }
  else {
    currentPlayer = playerOne.getInput();
    turn++;
  }
  checkGameState();
  playerTurn();
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
    return;
  }
  // tie
  if (gameBoard.checkFull(board) && turn === 9) {
    gameOver = true;
  }
}

function playerTurn() {
  const playerTurnMessage = document.querySelector('.playerTurn');
  if (gameOver && gameBoard.checkFull(board) && turn === 9) {
    playerTurnMessage.textContent = 'Game is a tie.'
  }
  else if (gameOver && currentPlayer === playerOne.getInput()) {
    playerTurnMessage.textContent = 'O has won the game.'
  }
  else if (gameOver && currentPlayer === playerTwo.getInput()) {
    playerTurnMessage.textContent = 'X has won the game.'
  }
  else {
    playerTurnMessage.textContent = `${currentPlayer}'s turn`
  }
}

const resetGameBtn = document.querySelector('.gameBoardReset');
resetGameBtn.addEventListener('click', () => {
  gameOver = false;
  turn = 0;
  currentPlayer = playerOne.getInput();
  const playerTurnMessage = document.querySelector('.playerTurn');
  playerTurnMessage.textContent = 'X\'s turn'
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++)
      board[i][j] = ' ';
  }
  const tile = document.querySelectorAll('.tile');
  tile.forEach((cell) => {
    cell.classList.remove('winningTiles');
    cell.innerText = ' ';
  })
})