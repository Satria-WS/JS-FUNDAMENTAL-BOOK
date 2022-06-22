let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}




//##while loop
var result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024


//## do while
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

//##if statement
if (false != true) {
  console.log("that make sence");
}
if (3 < 4) {
  console.log("suprise");
}

//##forrloops
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result); // → 1024



//##Breaking Out of a Loop
for (let current = 20;; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
} // → 21


//##Dispatching on a value with switch
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();

//##switch statement
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

//conditional (if, else, and switch)
//looping (while, do, and for)