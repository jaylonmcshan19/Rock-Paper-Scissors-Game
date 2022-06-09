function computerPLay () { 
    // this variable chooses a random number from 0.1 - 0.99
    const random = Math.random()
    // If the random we generated is less then 0.34 then the value is 'rock'
    if(random < 0.34) {
        return 'rock';
        //If the random number we generated is less than or equal to 0.67 
    } else if(random <= 0.67) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock'){
            return 'tie'
        } else if (computerSelection === 'paper') {
            computerScore++;
            return 'Computer Wins! Paper beats Rock'
        } else {
            playerScore++;
            return 'player wins Rock beats Scissors'
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return 'Player wins, Paper beats rock'
        } else if (computerSelection === 'Scissors') {
            computerScore
            return 'Computer wins, Scissor beats paper'
        } else (computerSelection === 'paper')
            return 'Tie'
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === "rock") {
            computerScore++;
            return 'Rock wins, Rock beats scissors'
        } else if (computerSelection === 'paper') {
            playerScore++ 
            return 'Player wins, Scissors beats paper'
        } else {
            return tie;
        }
    }
}
playerScore = parseInt(0);
computerScore = parseInt(0);

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick a move, Rock, Paper or Scissors")
        const computerSelection = computerPLay()
        console.log(playRound(playerSelection, computerSelection))
        console.log('Player Score = ' + playerScore);
        console.log('Computer Score =' + computerScore)
    }
}
game()