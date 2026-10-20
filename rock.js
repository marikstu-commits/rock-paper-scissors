console.log ("Hello World!")

function getComputerChoice() {

let randomChoice = Math.floor(Math.random()*3)+1;

if (randomChoice === 1) {
    return "ROCK";
} else if (randomChoice === 2) {
    return "PAPER";
} else if (randomChoice === 3) {
    return "SCISSORS";
}
}

function getHumanChoice (){

    let usersChoice = prompt("Winner in three rounds. Choose: Rock, Paper or Scissors. -Open console to play-");
    while (usersChoice.toUpperCase() !== "ROCK" &&
           usersChoice.toUpperCase() !== "PAPER" &&
           usersChoice.toUpperCase() !== "SCISSORS"
    ) { usersChoice = prompt("Choose: Rock, Paper or Scissors")}
    return usersChoice.toUpperCase();
}

function playGame () {

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {

    let human = humanChoice.toUpperCase();

    if (human === computerChoice) {
        return `You chose ${human}.
The computer chose ${computerChoice}.`;
    } else if (
        (human === "SCISSORS" && computerChoice === "PAPER") ||
        (human === "ROCK" && computerChoice === "SCISSORS") ||
        (human === "PAPER" && computerChoice === "ROCK") 
    ){  humanScore++ 
        return `You chose ${human}.
The computer chose ${computerChoice}.`;
    } else {
        computerScore++
        return `You chose ${human}.
The computer chose ${computerChoice}.`;
    }
}

for (let i=1; i <= 3; i++) {
    console.log(`--- Round ${i} ---`);
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const roundResult = playRound(humanSelection, computerSelection);
console.log(roundResult);
}
console.log(`---Game Over---`)
if (humanScore > computerScore) {
    return `You win! Score: ${humanScore}`;
} else { 
    return `You lose! Score: ${humanScore}`
}
}

console.log(playGame())
