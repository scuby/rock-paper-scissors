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
        const wipeGame = document.querySelectorAll('[class^=gameOver]');
        wipeGame.forEach((elem) => elem.parentNode.removeChild(elem));
        gameOn();
    });
});

const printResult = document.querySelector('.shoot');
const playerLog = document.querySelector('#left');
const computerLog = document.querySelector('#right');
const resultTable = document.querySelector('#middle');

const addRoundMatchup = document.createElement('span');
const addRoundInfo = document.createElement('p');   

// one round game print result (user vs computer)
function gameOn(){
    roundCounter++;        
    const addRoundResult = document.createElement('p');
    addRoundResult.classList.add('round' + roundCounter);

    const addPlayerLog = document.createElement('p');   
    addPlayerLog.classList.add('round' + roundCounter);
    addPlayerLog.textContent = playerSelection;
    playerLog.appendChild(addPlayerLog);

    const addComputerLog = document.createElement('p');
    addComputerLog.classList.add('round' + roundCounter);
    computerSelection = computerPlay();
    addComputerLog.textContent = computerSelection;
    computerLog.appendChild(addComputerLog);

    roundMatchup = `ROUND ${roundCounter}: ${playerSelection} vs ${computerSelection}`;
    addRoundInfo.classList.add('round' + roundCounter);
    addRoundInfo.textContent = roundMatchup;
    printResult.appendChild(addRoundInfo);
    // console.log(roundMatchup);
    // console.log(document.querySelector('div > #middle'));

    if (computerSelection == playerSelection){
        roundResult = "TIE";
        addRoundResult.textContent = roundResult;
        addRoundResult.classList.add('tie');
        resultTable.appendChild(addRoundResult);
        // console.log(roundResult);
    } else if ((computerSelection == "rock" && playerSelection == "paper") ||
                (computerSelection == "paper" && playerSelection == "scissors") ||
                (computerSelection == "scissors" && playerSelection == "rock")){
                    roundResult = " WIN ";
                    addRoundResult.textContent = roundResult;
                    addRoundResult.classList.add('win');
                    resultTable.appendChild(addRoundResult);
                    // console.log(roundResult);
                    gameRecord.wins++;
    } else {
        roundResult = " LOSS ";
        addRoundResult.textContent = roundResult;
        addRoundResult.classList.add('loss');
        resultTable.appendChild(addRoundResult);
        // console.log(roundResult);
        gameRecord.losses++;
    }
    playerScore.firstChild.nodeValue = gameRecord.wins;
    computerScore.firstChild.nodeValue = gameRecord.losses;
    // resultTable.appendChild(addRoundResult);
    checkScore();
}

function checkScore(){
    let gameResult = "CONGRATS, YOU WIN!";
    if((gameRecord.wins > gameRecord.losses) && (gameRecord.wins == 5)){
        console.log(`YOU WIN WITH A FINAL SCORE OF ${gameRecord.wins} to ${gameRecord.losses}. CONGRATULATIONS!`);
        resetGame(gameResult);
    } else if ((gameRecord.losses > gameRecord.wins) && (gameRecord.losses ==5)){
        console.log(`YOU LOST WITH A FINAL SCORE OF ${gameRecord.wins} to ${gameRecord.losses}. GOOD LUCK NEXT TIME!`);
        gameResult = "SORRY, YOU LOSE!";
        resetGame(gameResult);
    } // else console.log(gameRecord);
}

function resetGame(gameResult){
    gameRecord = { wins: 0, losses: 0 };
    roundCounter = 0;
    
    printResult.lastChild.remove('p');
    
    const gameOver = document.createElement('p');
    if ( gameResult == "CONGRATS, YOU WIN!" ){
        gameOver.classList.add('gameOverWon');
    } else gameOver.classList.add('gameOverLost');
    gameOver.textContent = "GAME OVER";
    
    const resetTable = document.querySelectorAll('[class^=round]');
    resetTable.forEach((elem) => elem.parentNode.removeChild(elem));

    const sayThis = document.createElement('p');
    sayThis.classList.add('gameOverToo');
    sayThis.textContent = gameResult;
    
    printResult.appendChild(gameOver);
    resultTable.appendChild(sayThis);
    
    // const buttonsDisabled = document.querySelector();
}

getPlayerName();