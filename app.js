const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}
    
function playRound() {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
        
    if (playerSelection == 'rock' && computerSelection == 'paper') {
            return (`You lose! ${computerSelection} beats ${playerSelection}.`);
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                return (`You win! ${playerSelection} beats ${computerSelection}.`);
        } else if (playerSelection == 'rock' && computerSelection == 'rock') {
                return (`Tie! You both chose ${playerSelection}.`);
        } else if (playerSelection == 'paper' && computerSelection == 'paper') {
                return (`Tie! You both chose ${playerSelection}.`);
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                return (`You lose! ${computerSelection} beats ${playerSelection}.`);
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                return (`You win! ${playerSelection} beats ${computerSelection}.`);
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                return (`You win! ${playerSelection} beats ${computerSelection}.`);
        } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
                return (`Tie! You both chose ${playerSelection}.`);
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                return (`You lose! ${computerSelection} beats ${playerSelection}.`);
        }
    }
    
    function game() {
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
    }

    console.log(game());
