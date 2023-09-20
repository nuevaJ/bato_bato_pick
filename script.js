const allButton = document.querySelectorAll("button");
const winnerTextResult = document.querySelector("#result");
const computerScoreResult = document.querySelector("#cScore");
const playerScoreResult = document.querySelector("#pScore");
const gameResult = document.querySelector("#gResult")
const restartButton = document.querySelector("#restart");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

//random computer choice
const getRandomComputerPicked = () => {
    let arrChoice = ["rock", "paper", "scissor"];

    return arrChoice[Math.floor(Math.random() * arrChoice.length)];
}

//initialization of incrementing result
const getUpdateResult = () => {
    computerScoreResult.textContent = `${computerScore}`;
    playerScoreResult.textContent = `${playerScore}`;
}

//accumulated results
const getEndResult = () => {

    if (playerScore === 5){
        gameResult.textContent = `Player Wins!`
        gameOver = true;
    }else if (computerScore === 5) {
        gameResult.textContent = `Computer Wins!`
        gameOver = true;
    }
    
    if (gameOver){
        allButton.forEach(button => button.removeEventListener("click", whenClicked));
        getReplayButton();
    }
}

const restart = () => {
    playerScore = 0; //ibalik sa zero ang parehas na score
    computerScore = 0;
    gameOver = false;
    gameResult.textContent =""; //alisin yung mga nilagay na text
    winnerTextResult.textContent ="";
    computerScoreResult.textContent = `${computerScore}`; //siyempre kuhain yung declared na score dito sa scope na to
    playerScoreResult.textContent = `${playerScore}`;

    allButton.forEach(button => button.addEventListener("click", whenClicked)); // maging clickable ulit then loop ulit sa whenCLicked func
    
    //thank you for this line of code - chatgpt!
    const existingRestartButton = document.querySelector("#restart button");
    if (existingRestartButton) {
        restartButton.removeChild(existingRestartButton);
    }
}

//para sa replay button
const getReplayButton = () => {
    let newBtn = document.createElement("button");
    newBtn.textContent = "Wanna try again?";
    
    restartButton.appendChild(newBtn);
    newBtn.addEventListener("click", restart);
}

//initialization nung mismong game
const playGame = (playerSelection, computerSelection) => {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        winnerTextResult.textContent = `It\'s a tie! Both Choose ${computerSelection}`;
    }else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            winnerTextResult.textContent = `Computer wins! It chose ${computerSelection}`;
            computerScore++;
        }else{
            winnerTextResult.textContent = `Player wins! Computer picked of ${computerSelection}`;
            playerScore++;
        }
    }else if(playerSelection === 'paper'){
        if (computerSelection === 'scissor'){
            winnerTextResult.textContent = `Computer wins! It chose ${computerSelection}`;
            computerScore++;
        }else{
            winnerTextResult.textContent = `Player wins! Computer picked ${computerSelection}`
            playerScore++;
        }
    }else if(playerSelection === 'scissor'){
        if (computerSelection === 'rock'){
            winnerTextResult.textContent = `Computer wins! Computer picked ${computerSelection}`
            computerScore++;
        }else{
            winnerTextResult.textContent = `Player wins! Computer picked ${computerSelection}`
            playerScore++;
        }
    }
}

const whenClicked = (e) => {
    let playerSelection = e.target.id;
    let computerSelection = getRandomComputerPicked();

    playGame(playerSelection, computerSelection);
    getUpdateResult();
    getEndResult();
}

allButton.forEach(button => button.addEventListener("click", whenClicked));