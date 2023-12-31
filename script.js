const game = () => {

    const getComputerChoice = () => {
        const computerChoices = ['bato', 'papel', 'gunting'];
    
        return computerChoices[Math.floor(Math.random() * computerChoices.length)]
    }
    
    const playRound = (playerSelection, computerSelection) => {

        playerSelection = playerSelection.toLowerCase();
    
        if (playerSelection === computerSelection){
            return `It's a tie! ${playerSelection} same with ${computerSelection}!`;
        } else if 
        (playerSelection === "bato" && computerSelection === "gunting" ||
        playerSelection === "gunting" && computerSelection === "papel" ||
        playerSelection === "papel" && computerSelection === "bato"){
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        }else{
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
    }
        playerSelection = prompt("Bato, Papel, o Gunting", "");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
}
game();