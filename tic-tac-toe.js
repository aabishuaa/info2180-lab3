//Author: Abishua Johnson
//ID Number: 620156609


//EXERCISE 1: ADDING SQUARES
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";
    let isGameOver = false;
    const status = document.getElementById("status");
    
    const newGameButton = document.querySelector(".btn");

//EXERCISE 2: ALTERNATING X AND O
    function handleSquareClick() {
        //EXERCISE 6: DISALLOWING CHEATING- already implemented to check if the square contains a letter
        if (!isGameOver && !this.classList.contains("X") && !this.classList.contains("O")) {
            this.classList.add(currentPlayer);
            this.textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            checkWinner();
        }
    }
//EXERCISE 4: CHECKING FOR WINNER
    function checkWinner() {
        const winningCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combination of winningCombination) {
            const [a, b, c] = combination;
            if (
                squares[a].classList.contains("X") &&
                squares[b].classList.contains("X") &&
                squares[c].classList.contains("X")
            ) {
                isGameOver = true;
                status.classList.add("you-won");
                status.textContent = "Congratulations! X is the Winner!";
                return;
            } else if (
                squares[a].classList.contains("O") &&
                squares[b].classList.contains("O") &&
                squares[c].classList.contains("O")
            ) {
                isGameOver = true;
                status.classList.add("you-won");
                status.textContent = "Congratulations! O is the Winner!";
                return;
            }
        }
    }
//EXERCISE 3: ADD HOVER
    function handleMouseOver() {
        this.classList.add("hover");
    }

    function handleMouseLeave() {
        this.classList.remove("hover");
    }

//EXERCISE 5: RESET GAME
    function resetGame() {
        squares.forEach((square) => {
            square.classList.remove("X", "O");
            square.textContent = "";
        });

        currentPlayer = "X";
        isGameOver = false;
        status.classList.remove("you-won");
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
    }

    squares.forEach((square) => {
        square.addEventListener("mouseover", handleMouseOver);
        square.addEventListener("mouseleave", handleMouseLeave);
    });

    squares.forEach((square) => {
        square.classList.add("square");
        square.addEventListener("click", handleSquareClick);
    });

    newGameButton.addEventListener("click", resetGame);
});
