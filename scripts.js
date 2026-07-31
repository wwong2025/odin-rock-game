console.log("Hello world")
let humanScore = 0
let computerScore = 0

//console.log(getComputerChoice())
//console.log(getHumanChoice())

function getComputerChoice(){
    let x = Math.random()
    if (x >0.66){
        return "rock"
    } else if (x > 0.33) {
        return "paper"
    } else { return "scissors"}
}

function getHumanChoice(){
    return prompt("Please enter choice (rock/ paper/ scissors) : ")
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    if (humanChoice == computerChoice) {
        message = `Human: ${humanChoice}, computer: ${computerChoice}: Draw !`
    } else if ((humanChoice==="rock" && computerChoice === "scissors") ||
                (humanChoice==="scissors" && computerChoice === "paper") ||
                (humanChoice==="paper" && computerChoice === "rock")) {
                    message = `You win ! ${humanChoice} beats ${computerChoice}`
                    humanScore += 1
                }
    else {
        message = `You lose ! ${computerChoice} beats ${humanChoice}`
        computerScore += 1
    }
    return message
}

//console.log(playRound(getHumanChoice(),getComputerChoice()))

function playGame(number_of_rounds = 5){
    for (let i = 0; i < number_of_rounds; i++) {
        playRound(getHumanChoice(),getComputerChoice())
    }
    if (humanScore > computerScore) {
        message = `You scored ${humanScore} vs computer ${computerScore}. You win the game!`
    }   else if (humanScore === computerScore){
        message = `You scored ${humanScore} and computer scored ${computerScore}. The game is a draw.`
    }   else { 
        message = `You scored ${humanScore} but computer scored ${computerScore}. You lose the game.`
    }
    console.log (message)
}

playGame()