let playerScore = 0;
let computerScore = 0;

game();

// Get computer's selection
function computerPlay() {
    let gameSelections = ["rock", "paper", "scissors"];
    let computerSelection = gameSelections[Math.floor(Math.random() * 3)];
    return computerSelection;
}

// Get user's selection
function getInput() {
    let playerSelection = (prompt("Make a selection.")).toLowerCase();
    return playerSelection;
}

// Get winner
function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("And the winner is...YOU!");
    } else if (computerScore > playerScore) {
        console.log("And the winner is...the computer!");
    } else {
        console.log("It's a tie!");
    }
}

// Play one round
function playRound() {
    let playerSelection = getInput();
    let computerSelection = computerPlay();
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            console.log("You win! Rock beats scissors.");
        } else if (computerSelection === "paper") {
            computerScore++;
            console.log("You lose! Paper beats rock.");
        } else {
            playerScore++;
            computerScore++;
            console.log("It's a tie!");
        }
        console.log(playerScore, computerScore);
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            console.log("You win! Paper beats rock.");
        } else if (computerSelection === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats paper.");
        } else {
            playerScore++;
            computerScore++;
            console.log("It's a tie!");
        }
        console.log(playerScore, computerScore);
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            console.log("You win! Scissors beats paper.");
        } else if (computerSelection === "rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors.");
        } else {
            playerScore++;
            computerScore++;
            console.log("It's a tie!");
        }
        console.log(playerScore, computerScore);
    } else {
        console.log("Invalid selection.");
        console.log(playerScore, computerScore);
    }
}

// Play five rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    getWinner(playerScore, computerScore);
}

