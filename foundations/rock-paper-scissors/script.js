function getComputerChoice() {
    let random = Math.random();

    if (random <= 1 / 3) {
        return "rock";
    }

    if (random <= 2 / 3) {
        return "paper";
    }

    if (random <= 3 / 3) {
        return "scissors";
    }
}

function getPlayerChoice() {
    let choice = '';

    while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = prompt("rock, paper or scissors? ").toLowerCase();
    }
    
    return choice;
}

function updatePlayerScore() {
    const score = document.querySelector("#player-score");
    score.textContent = Number.parseInt(score.textContent) + 1;
}

function updateComputerScore() {
    const score = document.querySelector("#computer-score");
    score.textContent = Number.parseInt(score.textContent) + 1;
}

function playRound(playerChoice) {
    const message = document.querySelector("#message");
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        message.textContent = "Draw!";
    }

    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        message.textContent = "Player wins! " + playerChoice + " beats " + computerChoice + ".";
        updatePlayerScore();
    }

    if ((computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")) {
        message.textContent = "Computer wins! " + computerChoice + " beats " + playerChoice + ".";
        updateComputerScore();
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener('click', () => playRound("rock"));
paperButton.addEventListener('click', () => playRound("paper"));
scissorsButton.addEventListener('click', () => playRound("scissors"));
