/* pseudocode

0 | 1 | 2
3 | 4 | 5
6 | 7 | 8
logic: fastest win is 5 turns
draw: turn 9
win conditions: 3 in a row: rows, columns, diagonals
function checkRow() {
  for (let i = 0;)
}


check/clear gameBoard if not starting new game

player1 = X
player2 = O

Factory Function:
const Player = (player1, 0(counter for turn)) => {
  
}


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

// Define gameBoard
function gameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(buttonCell());
      // define buttonCell function as define value as 0, and define addInput = (player#) => {
      // value = player#(changes cell value in DOM to 'X' or 'O' depending on turn
    }
  }
}

const Player = (input, turn) => {};

const playerOne = Player('X', 0);
const playerTwo = Player('O', 1);
