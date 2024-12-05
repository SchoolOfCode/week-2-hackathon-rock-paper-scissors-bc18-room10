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

// list of variables
let userChoice;
let computerChoice;
let userName;
let userScore = 0;
let computerScore =0;
let roundResult;


let playGame = confirm("Do you want to play Rock, Paper, Scissors?");
// console.log(playGame);
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


//userChoice
function getUserChoice() {
    userChoice = prompt('What do you choose: rock, paper or scissors?');

    if ((userChoice != 'rock')&& (userChoice != 'paper') && (userChoice != 'scissors') ){
        console.log("Please type either 'rock', 'paper' or 'scissors'." )
        getUserChoice();
    } 

    return userChoice;
}

//computerChoice function
function getComputerChoice() {
    //array with possible
    const options = ['rock', 'paper', 'scissors'];    
    
    //geenrate random number range 
    computerChoice = options[Math.floor((Math.random() * 3))];

    return computerChoice;
}





function playRound() {
    //alert("Please type either rock, paper or scissors");
    getUserChoice();
    getComputerChoice();

    

}

playRound();

 // if block 

if (userChoice === computerChoice) {
    roundResult = "draw";
} else if (
    (userChoice === "rock" && computerChoice === "scissors") || 
    (userChoice === "paper" && computerChoice === "rock") || 
    (userChoice === "scissors" && computerChoice === "paper")) 
{
    roundResult = "win";
    userScore++;
} else if (
    (userChoice === "rock" && computerChoice === "paper") || 
    (userChoice === "paper" && computerChoice === "scissors") || 
    (userChoice === "scissors" && computerChoice === "rock")) 
{
    roundResult = "lose";
    computerScore++;
}
    

function publishResult() {
    alert(`Computer: ${computerScore} ${userName}: ${userScore} \n
            ${userName} picked ${userChoice}. Computer picked ${computerChoice}.\n 
            You ${roundResult}!`)
}





console.log('userChoice', userChoice)
console.log('computerChoice', computerChoice)
console.log('roundResult', roundResult)
console.log(userScore)
console.log(computerScore)
console.log(publishResult())




