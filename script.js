
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


const buttons = document.querySelectorAll('#test')

let playerScore = 0;
let computerScore = 0;
let draws = 0;

 //playerSelection.window.onload=function(){   let button = document.querySelector('button'); button.addEventListener('click', playRound); }

 buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})


//, computerSelection

function playRound(playerSelection) {
    playerSelection.stopPropagation;
    console.log(this.value);
    let result = "";
    //console.log(playerSelection)

//playerSelection = prompt("Choose your character").toUpperCase(0);

computerSelection = getComputerChoice().toUpperCase(0);
    if (playerSelection == "GUS" && computerSelection == "WALTER") {
        playerScore += 1;
        result += ("If you try to interfere, this becomes a much simpler matter. You win");
    } 
    else if (playerSelection == "HECTOR" && computerSelection == "GUS") {
        playerScore += 1;
        result += ("Ding ding ding. You WIN");
        }  
    else if (playerSelection == "WALTER" && computerSelection == "HECTOR"){
        playerScore += 1;
        result += ("Ya win Mista White!");
    }  
    else if (playerSelection === computerSelection) {
        result += ("A tie...This is what comes from blood for blood");} 
    else if (playerSelection == "GUS" && computerSelection == "HECTOR") {
        computerScore += 1;
        result += ("Ding ding ding. You lose");
     }
    else if (playerSelection == "HECTOR" && computerSelection == "WALTER") {
        computerScore += 1;
        result += ("I am the danger. You lose.");
    }
    else if (playerSelection == "WALTER" && computerSelection == "GUS") {
        computerScore += 1;
        result += ("Never do the same mistake twice, Walter");
    }
    console.log(computerSelection)
    document.getElementById('result').innerHTML = result
    document.getElementById('comScore').innerHTML = computerScore
    document.getElementById('plaScore').innerHTML = playerScore
    return
}


const results = document.querySelectorAll('#result');
const comScore = document.querySelectorAll('#computerScore');
const plaScore = document.querySelectorAll('#playerScore');

//h1.textContent = result;
//player.textContent = playerScore;
//computer.textContent = computerScore;

/*function game() {
    let cont = true;
    while (cont) {
        playRound();
        cont = prompt("Play Again?") === "yes";
}
}
game();*/