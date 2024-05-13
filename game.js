//logic to get computer choice
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        return 'rock';
    }
    else if(randomNumber === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
//logic to get human choice
function getHumanChoice(){
    const userChoice = prompt("Enter your choice: 'rock', 'paper' or 'scissors'");
    return userChoice.toLowerCase();
}
//logic to play single round
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    
    if(humanChoice = computerChoice){
        console.log("Draw");
    }
    else if( (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){
        console.log("You Win! ${humanChoice} beats ${computerChoice}");
        humanScore++;
        }
        else {
            console.log("You Lose! ${computerChoice} beats ${humanChoice}");
            computerScore++;
        }
            
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    for ( let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore){
        console.log("Congratulations! You win the game!");
    }
    else if (humanScore < computerScore){
        console.log("Sorry! You loose the game!");
    }
    else {
        console.log("It's a Draw!");
    }
}

playGame();
