
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


function getComputerChoice() {
    let getChoice = ["Gus", "Hector", "Walter"]; 
    return getChoice[Math.floor(Math.random() * getChoice.length)];
    
}

let playerSelection = prompt("Choose Your Character");
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Gus" && computerSelection == "Walter") {
        return ("If you try to interfere, this becomes a much simpler matter. You lose");} 
    else if (playerSelection == "Hector" && computerSelection == "Gus") {
        return ("Ding ding ding. You WIN");}  
    else if (playerSelection == "Walter" && computerSelection == "Hector"){
        return ("Ya win Mista White!");}  
    else if (playerSelection === computerSelection) {
       return ("A tie...This is what comes from blood for blood");} 
    else if (playerSelection == "Gus" && computerSelection == "Hector") {
        return ("Ding ding ding. You lose") }
    else if (playerSelection == "Hector" && computerSelection == "Walter") {
        return ("I am the danger. You lose.") }
    else if (playerSelection == "Walter" && computerSelection == "Gus") {
        return ("Never do the same mistake twice, Walter")}
   }



   function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Your Character");
        let computerSelection = getComputerChoice();
     }
     function getComputerChoice() {
        let getChoice = ["Gus", "Hector", "Walter"]; 
        return getChoice[Math.floor(Math.random() * getChoice.length)];
        
    }
     playRound(playerSelection, computerSelection);
   }