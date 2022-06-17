// rock paper scissors

// get random int to decide computer move
function getRandomInt(){
    let randomInt = Math.floor(Math.random() * 3);
    // console.log(randomInt);
    return randomInt;
}

// get random computer move
function computerPlay(moveCode){
    let computerMove = "";
        switch (moveCode) {
            case 0:
                computerMove = "rock";
                break;
            case 1:
                computerMove = "paper";
                break;
            case 2:
                computerMove = "scissors";
                break;
            default:
        }
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
function playRound(playerSelection, computerSelection){
    let roundResult = `${playerSelection} vs ${computerSelection}`;
    console.log(roundResult);
    if (computerSelection == playerSelection){
        roundResult = "It's a tie! Try again!";
        console.log(roundResult);
        playRound(playerPlay(), computerPlay(getRandomInt()));
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        roundResult = "You win! Paper covers Rock!";
        console.log(roundResult);
        gameRecord.wins++;
    } else if (computerSelection == "paper" && playerSelection == "scissors"){
        roundResult = "You win! Scissors cut Paper!";
        console.log(roundResult);
        gameRecord.wins++;
    } else if (computerSelection == "scissors" && playerSelection == "rock"){
        roundResult = "You win! Rock smashes Scissors!";
        console.log(roundResult);
        gameRecord.wins++;
    } else {
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        console.log(roundResult);
        gameRecord.losses++;
    }
}

// initialize live score array and user and computer selection variables
const gameRecord = { wins: 0, losses: 0 };
let playerSelection = "";
let computerSelection = "";
 
// five round game (user vs computer)
function game(){
    for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay(getRandomInt()));
        console.table(gameRecord);
    }

    if(gameRecord.wins > gameRecord.losses){
        console.log(`YOU WIN WITH A FINAL SCORE OF ${gameRecord.wins} to ${gameRecord.losses}. CONGRATULATIONS!`);
    } else 
        console.log(`YOU LOST WITH A FINAL SCORE OF ${gameRecord.wins} to ${gameRecord.losses}. GOOD LUCK NEXT TIME!`);
}

// play a 5-round game of rock/paper/scissors
game();