//##lexical scoping
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    conole.log(`${ingredientAmount} ${unit} ${name}`)
  }
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
}

//##function as value
let launchMissiles = function() {
  missileSystem.launch("now");
}

if (true) {
  launchMissiles = function() {

  }
}

//## Declaration notation

function square(x) {
  return x * x;
}
console.log("this is my square " + square(4));

console.log("The future says: ", future());

function future() {
  return "You will never have fly";
}


//## Arrow function
const square1 = (x) => { return x * x; };
const square2 = x => x * x;

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

const horn = () => {
  console.log("Toot");
};

//## The call stack , is track record where function inside function
//The place where the computer stores this context is the call stack.
//https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

//#Maximum call stack size
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}
console.log(chicken() + " came first."); //Maximum call stack size exceeded



//##Optional argument
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64


//## Closure
//The ability treat function as value
//A function that references bindings from local scopes around it is called a closure
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));

//##recursion
//Recursion is a widely used phenomenon in computer science used to solve complex problems by breaking them down into simpler ones
//Recursion is a programming technique using function or algorithm that calls itself one or more times until a specified condition is met 
//The dilemma of speed versus elegance is an interesting one

//So, it generally looks like this.
function recurse() {
  // function code
  recurse();
  // function code
}
recurse();

// program to count down numbers to 1
function factorial(x) {
  // if number is 0
  if (x === 0) {
    return 1;
  }
  // if number is positive
  else {
    return factorial(x - 1);
  }
}
console.log(factorial(4))

//For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all. Here is a recursive solution:
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)



//## Grow function
//bad function
function printFarmInventory(cows, chicken) {
  let cowString = String(cows);
  let chickenString = String(chicken);

  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);

  while (chickenString.length < 3) {
    chickenString = "0" + chickenString
  }
  console.log(`${chickenString} Chicken`);
}
printFarmInventory(7, 11);

//better ways
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}
printFarmInventory(7, 11, 3);

//single concept. get better
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);