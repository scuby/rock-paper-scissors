// rock paper scissors

// random computer move
function computerPlay(){

}

// single round (user vs computer)
function playRound(playerSelection, computerSelection) {

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