let pChoice;
let cChoice = {Value:''};
let pChoiceInt = 0;
let cChoiceInt = 0;
const buttons = document.querySelectorAll('.btn');

let pScore = 0;
let cScore = 0;

const player = document.querySelector('#player-score');
player.textContent = `Player Score: ${pScore}`;

const computer = document.querySelector('#comp-score');
computer.textContent = `Computer Score: ${cScore}`;

const output = document.querySelector('#output');

buttons.forEach((button) => (button.addEventListener)('click',() => {
        pChoice = button.id;
        if (pChoice === 'rock') {
                pChoiceInt = 0;
        } else if (pChoice === 'paper') {
                pChoiceInt = 1;
        } else if (pChoice === 'scissors') {
                pChoiceInt = 2;
        }
        
        cChoiceInt = cPlay(cChoice);
        playGame();
}))



function cPlay(cChoice) {
        let cNum = Math.floor(Math.random() * 3);
        if (cNum === 0) {
                cChoice.Value = 'rock';
        } else if (cNum === 1) {
                cChoice.Value = 'paper';
        } else if (cNum === 2) {
                cChoice.Value = 'scissors';
        }
        return cNum;
}

function playRound() {
        let winner = [[0, 2, 1], [1, 0, 2], [2, 1, 0]];
        let result = winner[pChoiceInt][cChoiceInt];
        if (result === 0) {
                output.textContent = `${pChoice} : ${cChoice.Value}`;
        } else if (result === 1) {
                output.textContent = `${pChoice} : ${cChoice.Value}`;
                pScore++
        } else if (result === 2) {
                output.textContent = `${pChoice} : ${cChoice.Value}`;
                cScore++
        }
}

function playGame() {
        output.textContent = 'Make a choice.';
        playRound();
        player.textContent = `Player Score: ${pScore}`;
        computer.textContent = `Computer Score: ${cScore}`;
        if (pScore === 5) {
                output.textContent = 'YOU WIN!!!';
                pScore = 0;
                cScore = 0;
        } else if (cScore === 5) {
                output.textContent = 'Better luck next time...';
                pScore = 0;
                cScore = 0;
        }
}