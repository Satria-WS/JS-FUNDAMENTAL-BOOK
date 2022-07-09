const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return "Error !!!";
  }

}

//console.log(getUserChoice("ROCK"))
  

const getComputerChoice = () => {
  switch (Math.floor((Math.random() * 3))) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}
//getComputerChoice();

const determineWinner = (userChoice , computerChoice) => {
if (userChoice === computerChoice) {
  return "The game was tie";
}

  if (userChoice === "rock"  ) {
    if (computerChoice === "paper"){
      return "Computer Won"
    } else {
      return "You win"
    }
  }

if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer Won";
    } else {
      return "You win";
    }
  }

if (userChoice === "paper") {
  if (computerChoice === "scissors") {
    return "Computer Won";
  } else {
    return "You win";
  }
}



}


const playGame = () => {
  let userChoice = getUserChoice(getComputerChoice())
  console.log(userChoice);
  let computerChoice = getComputerChoice()
  console.log(computerChoice);
  //let determine who won
  console.log(determineWinner(userChoice , computerChoice));
}
playGame();
//scissors , paper undefined
//paper,scissors undefined




