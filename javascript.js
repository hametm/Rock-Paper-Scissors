let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const btn = document.querySelectorAll(".selection");
const resetBtn = document.querySelector("#reset");
const results = document.getElementById("results");
const resultText = document.getElementById("resultText");
const score = document.getElementById("score");
const scoreHeader = document.getElementById("scoreHeader");
const winner = document.createElement("p");

// Get player input and play the game
btn.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerPlay();
        playRound(playerSelection, computerSelection);
    })
});

resetBtn.addEventListener('click', resetScore());

// Get computer selection
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
        winner.style.fontFamily = "'Permanent Marker', cursive";
        winner.style.fontSize = "48px";
        results.appendChild(winner);
        setWinnerStyle();
        resetScore();
    }
    if (computerScore === 5) {
        winner.textContent = "You lose! Robots are taking over the world... OUR WORLD!";
        winner.style.fontFamily = "'Permanent Marker', cursive";
        winner.style.fontSize = "48px";
        results.appendChild(winner);
        setWinnerStyle();
        resetScore();
    }
}

function setWinnerStyle() {
    winner.style.color = "darkblue";
    winner.style.fontWeight = "bold";
    winner.style.textAlign = "center";
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}