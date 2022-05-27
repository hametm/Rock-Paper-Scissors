function computerPlay() {
    let gameSelections = ["rock", "paper", "scissors"];
    let computerSelection = gameSelections[Math.floor(Math.random() * 3)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors.";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "It's a tie!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock.";
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper.";
        } else {
            return "It's a tie!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beats paper.";
        } else if (computerSelection === "rock") {
            return "You lose! Rock beats scissors.";
        } else {
            return "It's a tie!";
        }
    } else {
        return "Invalid selection.";
    }
}

// For next version with UI

function getInput() {
    let playerSelection = (prompt("Make a selection.")).toLowerCase();
    return playerSelection;
}

console.log(playRound (getInput(), playRound()));