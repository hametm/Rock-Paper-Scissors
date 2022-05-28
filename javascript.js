let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

computerPlay(); 

let rockButton = document.getElementById("rock");
rockButton.addEventListener('click', () => {
    playerSelection = rockButton.id;
    playRound(playerSelection, computerSelection);
});

let paperButton = document.getElementById("paper");
paperButton.addEventListener('click', () => {
    playerSelection = paperButton.id;
    playRound(playerSelection, computerSelection);
});

let scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener('click', () => {
    playerSelection = scissorsButton.id;
    playRound(playerSelection, computerSelection);
});

function computerPlay() {
    let gameSelections = ["rock", "paper", "scissors"];
    computerSelection = gameSelections[Math.floor(Math.random() * 3)];
}

function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("And the winner is...YOU!");
    } else if (computerScore > playerScore) {
        console.log("And the winner is...the computer!");
    } else {
        console.log("And the winner is...both of you! It's a tie!");
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
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
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    getWinner(playerScore, computerScore);
}

