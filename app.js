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
            return ('You lose!');
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                return ('You win!');
        } else if (playerSelection == 'rock' && computerSelection == 'rock') {
                return ('Tie!');
        } else if (playerSelection == 'paper' && computerSelection == 'paper') {
                return ('Tie!');
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                return ('You lose!');
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                return ('You win!');
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                return ('You win!');
        } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
                return ('Tie!');
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                return ('You lose!');
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
