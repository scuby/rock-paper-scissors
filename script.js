// rock paper scissors

// random computer move
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
    console.log(computerMove);
    
    return computerMove;
}

// single round (user vs computer)
function playRound(playerSelection, computerSelection) {
    let roundResult = `${playerSelection} vs ${computerSelection}`;
    console.log(roundResult);
    if (computerSelection == "nuclear bomb"){
        console.log("Nuclear Bomb is not an option. Getting new computer play...");
        computerSelection = computerPlay(); // get new play from computer
        playRound(playerSelection, computerSelection);
    } else if (computerSelection == "paper"){
        roundResult = "You lose! Paper covers Rock!";
        console.log(roundResult);
    } else if (computerSelection == "scissors"){
        roundResult = "You win! Rock smashes Scissors!";
        console.log(roundResult);
    } else {
        roundResult = "It's a tie! Rock has enjoyed Rock's company for millions of years!";
        console.log(roundResult);
    }
}
  
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// five round game (user vs computer)
function game(){
    for ( let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);
    }
}