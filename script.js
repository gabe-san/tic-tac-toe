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

const playerOne = Player('X');
const playerTwo = Player('O');
const currentPlayer = playerOne;
let board;
const gameOver = false;

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
      document.querySelector('.gameBoard').appendChild(tile);
    }
  }
})();


const displayTurn = (() => {
  const addInput = () => {
    if (gameOver) {
      return;
    }
    const gameInputCoord = this.id.split('-');
    const r = parseInt(gameInputCoord[0], 10);
    const c = parseInt(gameInputCoord[1], 10);
    board[r][c] = currentPlayer;
    const tile = this;
    if (currentPlayer === playerOne) {
      tile.textContent = 'X';
    }
    else {
      tile.textContent = 'O';
    }
  }
  return { addInput };
})();

const buttonInput = document.querySelectorAll('buttons')
buttonInput.forEach(button => {
  button.addEventListener('click', displayTurn.addInput)
})

