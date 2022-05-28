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

// Event listeners
rockButton.addEventListener('click', () => {
    playerSelection = rockButton.id;
    computerPlay();
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    playerSelection = paperButton.id;
    computerPlay();
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    playerSelection = scissorsButton.id;
    computerPlay();
    playRound(playerSelection, computerSelection);
});

// Actual functions
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
        winner.style.color = "pink";
        winner.style.fontSize = "50px";
        winner.style.fontWeight = "bold";
        winner.style.textShadow = "black 1px 0 10px";
        winner.style.textAlign = "center";
        winner.style.marginTop = "0px";
        results.appendChild(winner);
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore === 5) {
        winner.textContent = "You lose! Robots are taking over the world... OUR WORLD!";
        results.appendChild(winner);
        winner.style.color = "pink";
        winner.style.fontSize = "36px";
        winner.style.fontWeight = "bold";
        winner.style.textShadow = "black 1px 0 10px";
        winner.style.textAlign = "center";
        winner.style.marginTop = "0px";
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