/* pseudocode

0 | 1 | 2
3 | 4 | 5
6 | 7 | 8

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
  
})();

const buttonInput = document.querySelectorAll("buttons")
buttonInput.forEach(button => {
    button.addEventListener('click', () => {
      gameBoard.updateScreen()
      gameBoard.appendTurnInput
    })
})

*/
