
/* Determines the choice of the computer */
function getComputerChoice() {
    options = ['rock', 'paper', 'scissors'];
    choice = Math.floor(Math.random()*options.length); /* returns a random nr. in [0,2] which can be used as index in options */
    return options[choice]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    console.log(`Computer chose: ${computerSelection}`);
    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
        return 'tie'
    } else if ((playerSelection === 'rock') && (computerSelection == 'scissors') || (playerSelection === 'scissors') && (computerSelection == 'paper') || (playerSelection === 'paper') && (computerSelection == 'rock')) {
        console.log("You win!")
        return 'win'
    } else {
        console.log("You lose!")
        return 'lose'
    }
}

function game() {
    for (let i=0; i<5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Choose rock, paper or scissors");
        result = playRound(playerSelection, computerSelection);
        if (result === 'win') {
            score_player += 1;
        }
        if (result === 'lose') {
            score_computer += 1;
        }
        console.log(`The score is computer-player: ${score_computer} - ${score_player}`);
    }
}

let computerSelection;
let playerSelection;
let score_player = 0;
let score_computer = 0;
game();





