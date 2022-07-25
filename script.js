// rock paper scissors

// initialize live score array and user and computer variables
let gameRecord = { wins: 0, losses: 0 };
let playerScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");
let roundMatchup = "";
let roundResult = "";
let roundCounter = 0;
let playerSelection = "";
let computerSelection = "";
 
// get random computer move
function computerPlay(){
    let computerMove = "";
    let randomInt = Math.floor(Math.random() * 3);
        switch (randomInt) {
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
    let printPlayerName = document.getElementById("user");
    let playerName = prompt("What's your name?");
    printPlayerName.firstChild.nodeValue = playerName;
}

// call gameOn() when player clicks one of the move option buttons
const buttonPlays = document.querySelector('#button-span')
const buttons = buttonPlays.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        playerSelection = e.target.id;
        gameOn();
    });
});

// const playerLog = document.querySelector('#left');
// const computerLog = document.querySelector('#right');
// const resultLog = document.querySelector('#middle');

// one round game print result (user vs computer)
function gameOn(){
    roundCounter++;        
    computerSelection = computerPlay();
    roundMatchup = `ROUND ${roundCounter}: ${playerSelection} vs ${computerSelection}`;
    // console.log(roundMatchup);
    const resultTable = document.querySelector('#middle');
    const addRoundMatchup = document.createElement('div');
    const addRoundResult = document.createElement('div');
    addRoundResult.classList.add('round' + roundCounter);
    addRoundMatchup.classList.add('round' + roundCounter);
    addRoundMatchup.textContent = roundMatchup;
    resultTable.appendChild(addRoundMatchup);
    console.log(roundMatchup);
    console.log(document.querySelector('div > #middle'));

    if (computerSelection == playerSelection){
        roundResult = "It's a tie! Try again!";
        addRoundResult.textContent = roundResult;
        resultTable.appendChild(addRoundResult).scrollIntoView;
        console.log(roundResult);
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        roundResult = "You win! Paper covers Rock!";
        addRoundResult.textContent = roundResult;
        resultTable.appendChild(addRoundResult).scrollIntoView;
        console.log(roundResult);
        gameRecord.wins++;
    } else if (computerSelection == "paper" && playerSelection == "scissors"){
        roundResult = "You win! Scissors cut Paper!";
        addRoundResult.textContent = roundResult;
        resultTable.appendChild(addRoundResult).scrollIntoView;
        console.log(roundResult);
        gameRecord.wins++;
    } else if (computerSelection == "scissors" && playerSelection == "rock"){
        roundResult = "You win! Rock smashes Scissors!";
        addRoundResult.textContent = roundResult;
        resultTable.appendChild(addRoundResult).scrollIntoView;
        console.log(roundResult);
        gameRecord.wins++;
    } else {
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        addRoundResult.textContent = roundResult;
        resultTable.appendChild(addRoundResult).scrollIntoView;
        console.log(roundResult);
        gameRecord.losses++;
    }
    playerScore.firstChild.nodeValue = gameRecord.wins;
    computerScore.firstChild.nodeValue = gameRecord.losses;
    // resultTable.appendChild(addRoundResult);
    checkScore();
}

function checkScore(){
    if((gameRecord.wins > gameRecord.losses) && (gameRecord.wins == 5)){
        console.log(`YOU WIN WITH A FINAL SCORE OF ${gameRecord.wins} to ${gameRecord.losses}. CONGRATULATIONS!`);
        resetGame();
    } else if ((gameRecord.losses > gameRecord.wins) && (gameRecord.losses ==5)){
        console.log(`YOU LOST WITH A FINAL SCORE OF ${gameRecord.wins} to ${gameRecord.losses}. GOOD LUCK NEXT TIME!`);
        resetGame();
    } // else console.log(gameRecord);
}

function resetGame(){
    gameRecord = { wins: 0, losses: 0 };
    roundCounter = 0;
    const resetTable = document.querySelector('#middle');
    console.log(resetTable.firstChild);
    const resetTableHeader = resetTable.firstChild;
    document.querySelector('div > #middle').remove;
    // console.clear();
    // const buttonsDisabled = document.querySelector()
}

getPlayerName();