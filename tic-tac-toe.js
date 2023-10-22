//Author: Abishua Johnson
//ID Number: 620156609


//EXERCISE 1: ADDING SQUARES
document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");

  squares.forEach((square) => {
    square.classList.add("square");
  });
});

//EXERCISE 2: ALTERNATING X AND O
document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  let currentPlayer = "X";

  function handleSquareClick() {
    if (!this.classList.contains("X") && !this.classList.contains("O")) {
      this.classList.add(currentPlayer);
      this.textContent = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }

  squares.forEach((square) => {
    square.classList.add("square");
    square.addEventListener("click", handleSquareClick);
  });
});

