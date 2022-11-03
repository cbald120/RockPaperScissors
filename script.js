
//Example of proper function
function greet () {
    console.log("Hello World"); //you can add a parameter with + '' to make it say Hello Chris
}

greet();



//let guessSubmit = document.querySelector('.guessSubmit');
//let guessField = document.querySelector('.guessField');
//let result = document.querySelector('.result');
//const lastResult = document.querySelector('.lastResult');

//function computerSelection(weapon) {




//current objectives: create rounds, create answer for incorrect input (jesse), create score tab in HTML, 

function getComputerChoice() {
    let getChoice = ["Gus", "Hector", "Walter"]; 
    return getChoice[Math.floor(Math.random() * getChoice.length)];
    
}



let playerScore = 0;
let computerScore = 0;
let draws = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Choose your character").toUpperCase(0);
    computerSelection = getComputerChoice().toUpperCase(0);
    if (playerSelection == "GUS" && computerSelection == "WALTER") {
        return ("If you try to interfere, this becomes a much simpler matter. You win");
    } 
    else if (playerSelection == "HECTOR" && computerSelection == "GUS") {
        return ("Ding ding ding. You WIN");}  
    else if (playerSelection == "WALTER" && computerSelection == "HECTOR"){
        return ("Ya win Mista White!");
    }  
    else if (playerSelection === computerSelection) {
       return ("A tie...This is what comes from blood for blood");} 
    else if (playerSelection == "GUS" && computerSelection == "HECTOR") {
        return ("Ding ding ding. You lose");
     }
    else if (playerSelection == "HECTOR" && computerSelection == "WALTER") {
        return ("I am the danger. You lose.");
    }
    else if (playerSelection == "WALTER" && computerSelection == "GUS") {
        return ("Never do the same mistake twice, Walter");
    }
}

//h1.textContent = result;
//player.textContent = playerScore;
//computer.textContent = computerScore;

function game() {
    let cont = true;
    while (cont) {
        playRound();
        cont = prompt("Play Again?") === "yes";
}
}
game();