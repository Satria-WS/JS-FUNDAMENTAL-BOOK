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
console.log(square(, true, "hedgehog"));

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