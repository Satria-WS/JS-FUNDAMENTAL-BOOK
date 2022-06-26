// "use strict"
function canYouSpotTheProblem() {
  for (counter = 0; counter < 5; counter++) {
    console.log(counter);
  }
}

canYouSpotTheProblem();

"use strict" ;//call outside of strict mode

//##function Person
function Person(name) {
  this.name = name;
}
let ferdinand = Person("Ferdinand"); // oops
console.log(ferdinand); //undefined
console.log(name); // → Ferdinand //the compiler issues a warning message to indicate that the variable is not recommended to be used.
//If a variable that is specified with the deprecated attribute is used


/* 


*/