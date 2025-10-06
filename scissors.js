// Get references to HTML elements
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const messageEl = document.getElementById('message');

// Select all elements with the class 'choice'
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let computerScore = 0;

// Function to get a random computer choice
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// Function to play a single round
function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        userScore++;
    } else {
        result = 'You lose!';
        computerScore++;
    }

    // Update the UI
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
    messageEl.textContent = `${result} You chose ${userChoice}, and the computer chose ${computerChoice}.`;
}

// Add event listeners to the choice divs
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        // The id of the div is 'rock', 'paper', or 'scissors'
        const userChoice = choice.id;
        playRound(userChoice);
    });
});