//  Rock, Paper, or Scissors
// Objective
// Rock,Paper,or Scissors

// arrow function

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase(); 
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'Scissors'){
    return userInput
  } else {
    return 'Error!'
  }   
}
// console.log(getUserChoice("Rock"))

function getComputerChoice(){
randomNumber = Math.floor(Math.random()* 3)
switch (randomNumber){
  case 0:
    // console.log ("rock");
    return "rock"
    break;
  case 1:
    // console.log("Paper")
    return "paper"
    break;
  case 2:
    // console.log ("Scissors")
    return "Scissors"
    break;
}

}

// console.log(getComputerChoice())



function determineWinner(userChoice,computerChoice){
  // Rock,Paper,or Scissors
  userChoice = userChoice[0].toUpperCase()+ userChoice.substring(1).toLowerCase();
  computerChoice = computerChoice[0].toUpperCase()+ computerChoice.substring(1).toLowerCase();
  // titlecase_user = userChoice[0].toUpperCase()+ userChoice.substring(1).toLowerCase()
  // titlecase_computer = computerChoice[0].toUpperCase()+ computerChoice.substring(1).toLowerCase()
  
    if (userChoice === computerChoice){
    return "The game is a tie!"
  }else if (userChoice === "Rock" && computerChoice === "Paper") {
    return "The game is a lose!";
  }else if(userChoice === "Rock" && computerChoice === "Scissors"){
    return "The game is a win!"
  }else if(userChoice === "Paper" && computerChoice === "Rock"){
    return "The game is a win!"
  }else if (userChoice === "Paper" && computerChoice === "Scissors"){
    return "The game is a lose!"
  }else if (userChoice === "Scissors" && computerChoice === "Rock"){
    return "The game is a lose!"
  }else if (userChoice === "Scissors" && computerChoice === "Paper"){
    return "The game is a win!"
  }else{
    return "Error!";
  }
}

// console.log(determineWinner("rock","Paper"))

const playGame = () => {
  let userChoice = getUserChoice ("paper");
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
