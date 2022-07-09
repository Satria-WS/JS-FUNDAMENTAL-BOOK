let userName = ""
userName === "jane" ? console.log("Hello Jane!") : console.log("Hello!");
let userQuestion = "Can i have pass exam?";
console.log( userQuestion);

//Magic Eight Ball
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = ""
switch(randomNumber) {
  case 0:
    //eightBall = "It is certain";
    eightBall += "It is certain";
    break;
  case 1:
    eightBall += "It is decidedly so";
    break;
  case 2:
    eightBall += "Reply hazy try again";
    break;
  case 3:
    eightBall += "Cannot predict now";
    break;
   case 4:
    eightBall += "Do not count on it";
    break;
  case 5:
    eightBall += "My sources say no";
    break;
  case 6:
    eightBall += "Outlook not so good";
    break;
  default:
    eightBall += "Signs point to yes";
    break;


}
console.log("You got Magic Ball Number: " + randomNumber );
console.log( "The eight ball answered: "+ eightBall);