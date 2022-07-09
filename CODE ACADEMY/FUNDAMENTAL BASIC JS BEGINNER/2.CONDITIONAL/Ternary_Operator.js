

// condition followed by a ? operator
// Then two expressions separated by a :
let price = 10;
let day = "Monday";
day = "saturday";

day === "Monday" ? price += 3 : price -= 4; 

console.log(price);




//convert if function to ternary operator
let isLocked = false;
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
//ternary operator
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;
if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}
//ternary operator
isCorrect ? console.log('Correct!') : console.log('Incorrect!')


let favoritePhrase = 'Love That!';
if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
//ternary operator
favoritePhrase ? console.log('I love that!') : console.log('I dont love that!');


