
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


let playerSelection = prompt("Choose your character").toUpperCase(0);
let computerSelection = getComputerChoice().toUpperCase(0);


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "GUS" && computerSelection == "WALTER") {
        return ("If you try to interfere, this becomes a much simpler matter. You win");} 
    else if (playerSelection == "HECTOR" && computerSelection == "GUS") {
        return ("Ding ding ding. You WIN");}  
    else if (playerSelection == "WALTER" && computerSelection == "HECTOR"){
        return ("Ya win Mista White!");}  
    else if (playerSelection === computerSelection) {
       return ("A tie...This is what comes from blood for blood");} 
    else if (playerSelection == "GUS" && computerSelection == "HECTOR") {
        return ("Ding ding ding. You lose") }
    else if (playerSelection == "HECTOR" && computerSelection == "WALTER") {
        return ("I am the danger. You lose.") }
    else if (playerSelection == "WALTER" && computerSelection == "GUS") {
        return ("Never do the same mistake twice, Walter")}
    

   }

//should i define i by wins or rounds? Which is easier?

   

   function game() {
    for (let i = 0; i < 5; i++) {
        let i = +"win";
        console.log(playRound(playerSelection, computerSelection));

     }
 
   }

   //let playerSelection = window.prompt("Enter your choice: ").toLowerCase();

 playRound(playerSelection, computerSelection);