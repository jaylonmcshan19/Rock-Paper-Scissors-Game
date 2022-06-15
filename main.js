/* Computer score and user default score, it will update when we play the game */
let computerScore = 0;
let userScore = 0;

/* storing all variables */
const scoreInfo = document.getElementById("winnerofthisround")
const scoreMessage = document.getElementById('scoreMessage')
let playersSign = document.getElementById('playersSign')
let computersSign = document.getElementById('computersSign')
const playerScores = document.getElementById('playerScores')
const computerScores = document.getElementById('computerScores')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorBtn = document.getElementById('scissorsBtn')
let winnerofthisround = document.getElementById('winnerofthisround')

/* How the computer selects between rock, paper or scissors */
function getComputerChoice () {
    const choices = ["r", 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}
/* How the game is played */
function game(userChocie) {
    const computerChoice = getComputerChoice ();
    /* if user wins */
    switch (userChocie + computerChoice) {
        /* User wins */
        case 'rs' :
        case 'pr' :
        case 'sp' :
            win (userChocie, computerChoice)
            break
            /* User looses */
        case 'rp' :
        case 'ps' :
        case 'sr' :
            lose (userChocie, computerChoice)
             break
             /* Tie */
        case 'rr' :
        case 'pp' :
        case 'ss' :
            tie (userChocie, computerChoice)
            break
        }
}
/* What happens when we click the rock papers scissors button */
function main() {
    rockBtn.addEventListener("click", function() {
        game('r')
    })
    paperBtn.addEventListener("click", function() {
        game('p')
    })
    scissorBtn.addEventListener("click", function() {
        game('s')
    })
}
main()
/* Shows in the UI the selections between rock, paper and scissors */
function updateChoices (userChoice, computerChoice) {
    switch (userChoice) {
        case 'r':
            playersSign.textContent = '✊'
             break
        case 'p':
            playersSign.textContent = '✋'
             break
        case 's':
            playersSign.textContent = '✌'      
    }
    switch (computerChoice) {
        case 'r':
            computersSign.textContent = '✊'
            break
        case 'p':
            computersSign.textContent = '✋'
            break
        case 's':
            computersSign.textContent = '✌'
    }
}
/* What happens when the user wins, computer wins and a tie */
function win (userChocie, computerChoice) {
    userScore++ 
    winnerofthisround.textContent = 'YOU WIN :)'
    playerScores.textContent = `Player: ${userScore}`;
    computerScores.textContent = `Computer: ${computerScore} `
    updateChoices(userChocie, computerChoice);
  
}
function lose (userChocie, computerChoice) {
computerScore++
winnerofthisround.textContent = "COMPUTER WINS :("
computerScores.textContent = `Computer: ${computerScore}`
playerScores.textContent = `Player: ${userScore}`
updateChoices(userChocie, computerChoice);
}
function tie (userChocie, computerChoice) {
    userScore++
    computerScore++
    computerScores.textContent = `Computer: ${computerScore}`
    playerScores.textContent = `Player: ${userScore}`
    winnerofthisround.textContent = "IT'S A DRAW HAHA"
    updateChoices(userChocie, computerChoice);
}
