let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const btn = document.querySelectorAll(".selection");
const results = document.getElementById("results");
const resultText = document.getElementById("resultText");
const score = document.getElementById("score");
const scoreHeader = document.getElementById("scoreHeader");
const winner = document.createElement("p");

btn.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerPlay();
        playRound(playerSelection, computerSelection);
    })
});

function computerPlay() {
    let gameSelections = ["rock", "paper", "scissors"];
    computerSelection = gameSelections[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    winner.textContent = "";
    if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;
        console.log("It's a tie!");
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++;
            console.log("Point for you!");
        }
    else if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
            computerScore++;
            console.log("Point for computer...");
    } else {
        console.log("Invalid selection.");
    }
    scoreHeader.textContent = "You: " + playerScore + "\nComputer: " + computerScore;
    gameOver();
}

function gameOver() {
    if (playerScore === 5) {
        winner.textContent = "You win!";
        winner.style.fontSize = "36px";
        results.appendChild(winner);
        setWinnerStyle();
    }
    if (computerScore === 5) {
        winner.textContent = "You lose! Robots are taking over the world... OUR WORLD!";
        winner.style.fontSize = "30px";
        results.appendChild(winner);
        setWinnerStyle();
    }
}

function setWinnerStyle() {
    winner.style.color = "pink";
    winner.style.fontWeight = "bold";
    winner.style.textShadow = "black 1px 0 10px";
    winner.style.textAlign = "center";
    resetScore();
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
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