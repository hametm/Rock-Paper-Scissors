const btn = document.querySelectorAll(".selection");
const winner = document.getElementById("winner");
const playerImage = document.getElementById("you");
const computerImage = document.getElementById("computer");
const yourScore = document.getElementById("yourScore");
const theComputerScore = document.getElementById("computerScore");
const playAgainButton = document.createElement("button");
const middleDiv = document.querySelector("#middleTop");
const pickText = document.getElementById("pickOne");

let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

/* Event listeners */

btn.forEach(button => {
    button.onclick = () => {
        playerSelection = button.id;
        computerPlay();
        playRound(playerSelection, computerSelection);
    }
});

playAgainButton.onclick = () => {
    playAgainButton.remove();
    resetScore();
    enableButtons()
    togglePickDisplay();
    resetImages();
}

/* Functions */

function computerPlay() {
    let gameSelections = ["rock", "paper", "scissors"];
    computerSelection = gameSelections[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    chooseImage();
    if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;
        displayScore();
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++;
            displayScore();
        }
    else if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
            computerScore++;
            displayScore();
    } 
    endGame();
}

function endGame() {
    if (playerScore === 5 && computerScore === 5) {
        winner.textContent = "You both win!";
        highlightPlayerImage();
        highlightComputerImage();
        displayGameEnd();
    } else if (playerScore === 5) {
        winner.textContent = "You win!";
        highlightPlayerImage();
        displayGameEnd();
    } else if (computerScore === 5) {
        winner.textContent = "The zookeeper wins!";
        highlightComputerImage();
        displayGameEnd();
    }
}

function displayScore() {
    yourScore.textContent = "Score: " + playerScore;
    theComputerScore.textContent = "Score: " + computerScore;
}

function displayGameEnd() {
    disableButtons();
    insertPlayAgainButton();
    togglePickDisplay();
}

function highlightPlayerImage() {
    playerImage.style.backgroundColor = "orange";
    playerImage.style.boxShadow = "2px 0px 8px grey, 0px 2px 8px grey, -2px 0px 8px grey, 0px -2px 8px grey";
}

function highlightComputerImage() {
    computerImage.style.backgroundColor = "orange";
    computerImage.style.boxShadow = "2px 0px 8px grey, 0px 2px 8px grey, -2px 0px 8px grey, 0px -2px 8px grey";
}

function resetImages() {
    playerImage.style.backgroundColor = "";
    computerImage.style.backgroundColor = "";
    playerImage.style.boxShadow = "";
    computerImage.style.boxShadow = "";
    playerImage.style.backgroundImage = "url(images/question-mark.png)";
    computerImage.style.backgroundImage = "url(images/question-mark.png)";
    playerImage.style.backgroundSize = "30%";
    computerImage.style.backgroundSize = "30%";
}

function togglePickDisplay() {
    pickText.classList.toggle("hidden");
}

function disableButtons() {
    btn.forEach(button => {
        button.disabled = true;
    });
}

function enableButtons() {
    btn.forEach(button => {
        button.disabled = false;
    });
}

function insertPlayAgainButton() {
    playAgainButton.classList.add("playAgainButton");
    playAgainButton.textContent = "Play Again";
    middleDiv.appendChild(playAgainButton);
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    winner.textContent = "";
    displayScore();
}

function chooseImage() {
    choosePlayerImage();
    chooseComputerImage();
}

function choosePlayerImage() {
    switch(playerSelection) {
        case "rock":
            playerImage.style.backgroundImage = "url(images/lion.png)";
            break;
        case "paper":
            playerImage.style.backgroundImage = "url(images/tiger.png)";
            break;
        case "scissors":
            playerImage.style.backgroundImage = "url(images/bear.png)";
            break;
        default:
            playerImage.style.backgroundImage = "";
            break;
    }
    playerImage.style.backgroundSize = "50%"
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
    computerImage.style.backgroundSize = "50%"
}