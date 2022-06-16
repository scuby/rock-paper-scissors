// rock paper scissors

// get random computer move
function computerPlay(){
    const moveCode = Math.floor(Math.random() * 10);
    let computerMove = ''; 
    switch(moveCode){
        case 1:
        case 2:
        case 3: computerMove = "rock";
            break;
        case 4:
        case 5:
        case 6: computerMove = "paper";
            break;
        case 7:
        case 8:
        case 9: computerMove = "scissors";
            break;
        default: computerMove = "nuclear bomb"; // the extra special case where the game ends. forever.
    }
    console.log(`Computer chose: ${computerMove}`);   
    return computerMove;
}

// get player move
function playerPlay(){
    let userInput = prompt("Rock, Paper, or Scissors?");
    switch(userInput.toLowerCase()){
        case "rock":
        case "paper":
        case "scissors":
            break;
        default:
            console.log(`${userInput} is not a valid selection. Please try again.`);
            userInput = playerPlay();
    }
    return userInput;
}

// single round (user vs computer)
function playRound(playerSelection, computerSelection) {
    let roundResult = `${playerSelection} vs ${computerSelection}`;
    console.log(roundResult);
    if (computerSelection == "nuclear bomb"){
        console.log("Nuclear Bomb is not an option. Getting new computer play...");
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } else if (computerSelection == playerSelection){
        roundResult = "It's a tie! Try again!";
        console.log(roundResult);
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        roundResult = "You win! Paper covers Rock!";
        console.log(roundResult);
    } else if (computerSelection == "paper" && playerSelection == "scissors"){
        roundResult = "You win! Scissors cut Paper!";
        console.log(roundResult);
    } else if (computerSelection == "scissors" && playerSelection == "rock"){
        roundResult = "You win! Rock smashes Scissors!";
        console.log(roundResult);
    } else {
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        console.log(roundResult);
    }
}


const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// five round game (user vs computer)
function game(){
    for ( let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);
    }
}