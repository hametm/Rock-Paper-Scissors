let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const btn = document.querySelectorAll(".selection");
const resetBtn = document.querySelector("#reset");
const results = document.getElementById("middle");
const resultText = document.getElementById("resultText");
const score = document.getElementById("score");
const scoreHeader = document.getElementsByClassName("scoreHeader");
const winner = document.getElementById("winner");
const background = document.getElementById("container");
const youImage = document.getElementById("you");
const computerImage = document.getElementById("computer");
const yourScore = document.getElementById("yourScore");
const theComputerScore = document.getElementById("computerScore");
const middleHeading = document.querySelector("h3");
const playAgainButton = document.createElement("button");
const playAgainDiv = document.querySelector("#playAgain");

// Get player input and play the game
btn.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerPlay();
        playRound(playerSelection, computerSelection);
    })
});

// resetBtn.addEventListener('click', resetScore());

// Get computer selection
function computerPlay() {
    let gameSelections = ["rock", "paper", "scissors"];
    computerSelection = gameSelections[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    chooseImage();
    if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;
        yourScore.textContent = "Score: " + playerScore;
        theComputerScore.textContent = "Score: " + computerScore;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++;
            yourScore.textContent = "Score: " + playerScore;
        }
    else if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
            computerScore++;
            theComputerScore.textContent = "Score: " + computerScore;
    } else {

    }
    endGame();
}

function endGame() {
    if (playerScore === 5 && computerScore === 5) {
        winner.textContent = "You both win!";
        btn.forEach(button => () => {
            button.disabled = true;
            console.log("Success");
        });
        playAgain();
    }
    if (playerScore === 5) {
        winner.textContent = "You win!";
        btn.forEach(button => () => {
            button.disabled = true;
            console.log("Success");

        });
        playAgain();
    }
    if (computerScore === 5) {
        winner.textContent = "The zookeeper wins!";
        btn.forEach(button => () => {
            button.disabled = true;
            console.log("Success");

        });
        playAgain();
    }

}

function playAgain() {
    playAgainButton.classList.add("playAgainButton");
    playAgainButton.textContent = "Play Again";
    playAgainDiv.appendChild(playAgainButton);
    btn.forEach(button => () => {
        button.disabled = false;
    });
}

playAgainButton.onclick = () => {
    playAgainButton.remove();
    resetScore();
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    yourScore.textContent = "Score: " + playerScore;
    theComputerScore.textContent = "Score: " + computerScore;
    winner.textContent = "";
}

function chooseImage() {
    choosePlayerImage();
    chooseComputerImage();
}

function choosePlayerImage() {
    switch(playerSelection) {
        case "rock":
            youImage.style.backgroundImage = "url(images/lion.png)";
            break;
        case "paper":
            youImage.style.backgroundImage = "url(images/tiger.png)";
            break;
        case "scissors":
            youImage.style.backgroundImage = "url(images/bear.png)";
            break;
        default:
            youImage.style.backgroundImage = "";
            break;
    }
    youImage.style.backgroundSize = "9rem"
}

function chooseComputerImage() {
    switch(computerSelection) {
        case "rock":
            computerImage.style.backgroundImage = "url(images/lion.png)";
            break;
        case "paper":
            computerImage.style.backgroundImage = "url(images/tiger.png)";
            break;
        case "scissors":
            computerImage.style.backgroundImage = "url(images/bear.png)";
            break;
        default:
            computerImage.style.backgroundImage = "";
            break;
    }
    computerImage.style.backgroundSize = "9rem"
}