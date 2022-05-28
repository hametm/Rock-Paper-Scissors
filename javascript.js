// Fix the error with no one getting a score at first!!!!!!!!!!!!!!!!!!!!!!!

let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

// DOM stuff
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let results = document.getElementById("results");
let resultText = document.getElementById("resultText");
let score = document.getElementById("score");
let scoreHeader = document.getElementById("scoreHeader");
let winner = document.createElement("p");


rockButton.addEventListener('click', () => {
    playerSelection = rockButton.id;
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    playerSelection = paperButton.id;
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    playerSelection = scissorsButton.id;
    playRound(playerSelection, computerSelection);
});

function computerPlay() {
    let gameSelections = ["rock", "paper", "scissors"];
    computerSelection = gameSelections[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    computerPlay(); 
    if (playerSelection === computerSelection) {
        resultText.textContent = "It's a tie!";
        results.appendChild(resultText);
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++;
            resultText.textContent = "Point for you!";
            results.appendChild(resultText);
        }
    else if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
            computerScore++;
            resultText.textContent = "Point for computer...";
            results.appendChild(resultText);
    } else {
        resultText.textContent = "Invalid selection.";
        results.appendChild(resultText);
    }
    scoreHeader.style.color = white;
    scoreHeader.textContent = "You: " + playerScore + "\nComputer: " + computerScore;
    gameOver();
}

function gameOver() {
    if (playerScore === 5) {
        winner.textContent = "You win!";
        results.appendChild(winner);
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore === 5) {
        winner.textContent = "You lose! Robots are taking over the world... OUR WORLD!";
        results.appendChild(winner);
        playerScore = 0;
        computerScore = 0;
    }
}

/*function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    getWinner(playerScore, computerScore);
}*/

/*function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("And the winner is...YOU!");
    } else if (computerScore > playerScore) {
        console.log("And the winner is...the computer!");
    } else {
        console.log("And the winner is...both of you! It's a tie!");
    }
}*/