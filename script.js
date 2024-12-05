//Prompt the user when they open the page if the want to start the game. DONE
//Create a function to start the game DONE
//Prompt asking the user for their name DONE
//Prompt the user to pick from rock paper and scissors
//Generate a random choice for the computer to pick
//Compare the users choice with the computers choice
//Alert the results of each choice and the result of the match
//and show the new point total of the user and the computer
//prompt if they want to play again from the RPS choice

//Potential list of functions
//prompt()
//alert()
//Math.floor Math.random
//get (variable)
//playGame playRound
//comparison

// function endGame() {
//     return 0;
// }

//list of variables
let userChoice = "rock";
let computerChoice = "rock";
let userName;
let userScore;
let computerScore;
let roundResult;

let playGame = confirm("Do you want to play Rock, Paper, Scissors?");
console.log(playGame);
if (!playGame) {
    alert("Sorry to see you go!");
} else {
    askName();
}

function askName() {
    let userName = prompt("What is your name?");
    if (userName === null || userName === "") {
        askName();
    }
}

// function playRound() {
//     alert("Please type either rock, paper or scissors")
// }

if (userChoice === computerChoice) {
    roundResult = "draw";
    } else if ((userChoice === "rock" && computerChoice === "scissors") 
        || (userChoice === "paper" && computerChoice === "rock") 
        || (userChoice === "scissors" && computerChoice === "paper")) {
            roundResult = "win";
        } else if ((userChoice === "rock" && computerChoice === "paper") 
            || (userChoice === "paper" && computerChoice === "scissors") 
            || (userChoice === "scissors" && computerChoice === "rock")) {
                roundResult = "lose";
        }
    
