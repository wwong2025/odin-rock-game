//const { createElement } = require("react")

//console.log("Welcome to rock, paper, scissors game")
let humanScore = 0
let computerScore = 0
const rps = ["rock","paper","scissors"]

//console.log(getComputerChoice())
//console.log(getHumanChoice())

const bodyHTML = document.querySelector("body")

const scores = document.createElement("div")
scores.classList.add ("scores")
scores.style.display = "flex"
scores.style.flexDirection = "column"
scores.style.justifyContent = "center"
scores.style.alignItems = "center"
scores.style.padding = "20px"
scores.style.border = "10px solid green"
scores.style.borderRadius = "5px"
scores.style.backgroundColor = "orange"
scores.style.color = "red"

const titleLine = document.createElement("div")
titleLine.textContent = "Scores"
titleLine.style.color = "black"
titleLine.style.fontSize = "20px"
titleLine.style.fontWeight = "bold"
titleLine.style.padding = "10px"
scores.appendChild(titleLine)

const numbersLine = document.createElement("div")
numbersLine.textContent = `Human ${humanScore} : ${computerScore} Computer`
numbersLine.style.fontSize = "14px"
scores.appendChild(numbersLine)

bodyHTML.appendChild(scores)



for (let c of rps) {
    const buts = document.createElement("button")
    buts.className = c
    buts.textContent = c
    buts.addEventListener("click", btn_func)
    bodyHTML.appendChild(buts)
}

function btn_func (e) {
    target = e.target.className
    //alert (`target : ${target}`)
    if (rps.includes(target)) {
        alert(playRound (target, getComputerChoice()))
        numbersLine.textContent = `Human ${humanScore} : ${computerScore} Computer`

        if (humanScore == 5 || computerScore == 5) {
            const endGame = document.createElement("div")
            endGame.textContent = `${humanScore == 5 ? "Human":"Computer"} won !`
            scores.appendChild(endGame)
            document.querySelectorAll("button").forEach (btn => {btn.disabled = true})
        }

    } else {
        alert ("ERROR: input incorrect")
    }
}



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
    let message = ""
    if (humanChoice === computerChoice) {
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

/*

function playGame(number_of_rounds = 5){
    if (humanScore > computerScore) {
        message = `You scored ${humanScore} vs computer ${computerScore}. You win the game!`
    }   else if (humanScore === computerScore){
        message = `You scored ${humanScore} and computer scored ${computerScore}. The game is a draw.`
    }   else { 
        message = `You scored ${humanScore} but computer scored ${computerScore}. You lose the game.`
    }
    //console.log (message)
    alert(message)
}

playGame()
*/