// rock paper scissors

// initialize live score array and user and computer variables
let gameRecord = { wins: 0, losses: 0 };
let playerScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");
let roundMatchup = "";
let roundResult = "";
let roundCounter = 1;
let playerSelection = "";
let computerSelection = "";
 
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

// get player name from user
function getPlayerName(){
    let playerName = prompt("What's your name?");
    return playerName;
}
let printPlayerName = document.getElementById("user");
printPlayerName.firstChild.nodeValue = getPlayerName();

const buttonRock = document.getElementById("rock");
buttonRock.addEventListener('click', function(){
    playerSelection = "rock";
    game();
});
const buttonPaper = document.getElementById("paper");
buttonPaper.addEventListener('click', function(){
    playerSelection = "paper";
    game();
});
const buttonScissors = document.getElementById("scissors");
buttonScissors.addEventListener('click', function(){
    playerSelection = "scissors";
    game();
});

function createNewRoundEntry(e){
    const roundRecordElement = document.createElement("p");
    const roundRecordEntry = document.createTextNode(e);
    roundRecordElement.appendChild(roundRecordEntry);
    document.getElementById("gameRecord").appendChild(roundRecordElement);

}

function createNewRecordEntry(roundResult){
    const roundRecordElement = document.createElement("div");
    const roundRecordEntry = document.createTextNode(roundResult);
    roundRecordElement.appendChild(roundRecordEntry);
    document.getElementById("gameRecord").appendChild(roundRecordElement);
}

// single round (user vs computer)
function playRound(playerSelection, computerSelection){
    roundMatchup = `ROUND ${roundCounter}: ${playerSelection} vs ${computerSelection}`;
    createNewRoundEntry(roundMatchup);
    if (computerSelection == playerSelection){
        roundResult = "It's a tie! Try again!";
        createNewRecordEntry(roundResult);
        // playRound(playerSelection, computerPlay(getRandomInt()));
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        roundResult = "You win! Paper covers Rock!";
        // console.log(roundResult);
        // createNewRecordEntry(roundResult);
        createNewRecordEntry(roundResult);
        gameRecord.wins++;
    } else if (computerSelection == "paper" && playerSelection == "scissors"){
        roundResult = "You win! Scissors cut Paper!";
        // console.log(roundResult);
        // createNewRecordEntry(roundResult);
        createNewRecordEntry(roundResult);
        gameRecord.wins++;
    } else if (computerSelection == "scissors" && playerSelection == "rock"){
        roundResult = "You win! Rock smashes Scissors!";
        // console.log(roundResult);
        // createNewRecordEntry(roundResult);
        createNewRecordEntry(roundResult);
        gameRecord.wins++;
    } else {
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        // console.log(roundResult);
        // createNewRecordEntry(roundResult);
        createNewRecordEntry(roundResult);
        gameRecord.losses++;
    }
    roundCounter++;
}

// one round game (user vs computer)
function game(){
    playRound(playerSelection, computerPlay(getRandomInt()));
    // console.table(gameRecord);
    playerScore.firstChild.nodeValue = gameRecord.wins;
    computerScore.firstChild.nodeValue = gameRecord.losses;


    if((gameRecord.wins > gameRecord.losses) && (gameRecord.wins == 5)){
        console.log(`YOU WIN WITH A FINAL SCORE OF ${gameRecord.wins} to ${gameRecord.losses}. CONGRATULATIONS!`);
        gameRecord = { wins: 0, losses: 0 };
    } else if ((gameRecord.losses > gameRecord.wins) && (gameRecord.losses ==5)){
        console.log(`YOU LOST WITH A FINAL SCORE OF ${gameRecord.wins} to ${gameRecord.losses}. GOOD LUCK NEXT TIME!`);
        gameRecord = { wins: 0, losses: 0 };
    } else console.table(gameRecord);
}