var cells = document.querySelectorAll(".cell");
var gameStatus = document.getElementById("game-status");
var restartButton = document.getElementById("restart-button");
var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];
var gameActive = true;

var winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
restartButton.addEventListener("click", restartGame);

function handleCellClick(e) {
  var cellIndex = e.target.getAttribute("data-index");

  if (board[cellIndex] !== "" || !gameActive) {
    return;
  }

  updateCell(e.target, cellIndex);
  checkWinner();
}

function updateCell(cell, index) {
  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  gameStatus.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
  var roundWon = false;

  for (let i = 0; i < winningCombinations.length; i++) {
    var [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    gameStatus.textContent = `Player ${
      currentPlayer === "X" ? "O" : "X"
    } wins!`;
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    gameStatus.textContent = "Game is a draw!";
    gameActive = false;
  }
}

function restartGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  gameStatus.textContent = `Player X's turn`;
  cells.forEach((cell) => (cell.textContent = ""));
}
