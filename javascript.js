let playerScore = 0;
let computerScore = 0;

game();

function computerPlay() {
    let gameSelections = ["rock", "paper", "scissors"];
    let computerSelection = gameSelections[Math.floor(Math.random() * 3)];
    return computerSelection;
}

function getInput() {
    let playerSelection = (prompt("Make a selection.")).toLowerCase();
    return playerSelection;
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

function playRound() {
    let playerSelection = getInput();
    let computerSelection = computerPlay();
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

