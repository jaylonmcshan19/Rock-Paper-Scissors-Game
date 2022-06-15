/* Scoring for user and computer */
let computerScore = 0;
let playerScore = 0;

/* Storing variables for future use */
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



/* How the computer selects */
function getComputerChoice () {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];

}
/* What happens when the Player wins */
function win(userChoice, computerChoice) {
 playerScore++
 playerScores.textContent = `Player :  ${playerScore}`
 computerScores.textContent = `Computer : ${computerScore}`;
 winnerofthisround.textContent = 'PLAYER WINS'
 if (userChoice === 'r' && computerChoice == 's' ) {
   scoreMessage.textContent = 'Rock beats Scissors :)'
 }
updateChoices(userChoice, computerChoice)
 }
 /*What happens when the computer wins */
function lose(userChoice, computerChoice) {
  computerScore++
  playerScores.textContent = `Player : ${playerScore}`;
  computerScores.textContent = `Computer : ${computerScore}`;
  winnerofthisround.textContent = 'COMPUTER WINS'
  updateChoices(userChoice, computerChoice)
}
/*What happens when it is a draw */
function draw(userChoice, computerChoice) {
  playerScores.textContent = `player : ${playerScore}`;
  computerScores.textContent = `Computer : ${computerScore}`
  winnerofthisround.textContent = 'DRAW HAHA'
  updateChoices(userChoice, computerChoice)
}
/* What happens when the user selects the choices */
function updateChoices (userChoice , computerChoice) {
  switch (userChoice) {
    case 'r':
      playersSign.textContent = '✊';
       break
     case 'p':
       playersSign.textContent = '✋';
       break
     case 's':
       playersSign.textContent = '✌';
       break}
  switch (computerChoice) {
    case 'r' :
      computersSign.textContent = '✊'
       break
    case 'p':
       computersSign.textContent = '✋'
        break
    case 's' :
      computersSign.textContent = '✌'
      break
  }
}


/* Taking the user choice  */
function game(userChoice) {
const computerChoice = getComputerChoice();
/*If user wins */
switch (userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
      win(userChoice, computerChoice)
     break;
/* If computer wins */
  case "rp":
  case "ps":
  case "sr":
    lose(userChoice, computerChoice)
     break;
/* If it is a draw */
  case "rr":
  case "pp":
  case "ss":
    draw(userChoice, computerChoice)
     break;
} 
}
/* What happens when we click the rock paper scissor buttons */


function main() {
  rockBtn.addEventListener("click",function() {
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