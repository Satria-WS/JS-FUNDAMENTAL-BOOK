//String interpolation is the process of evaluating string literals containing one or more placeholders (expressions, variables, etc).
//It can be performed using template literals: text ${expression} text.

let hell0 = "world";

// String concatenation
console.log("This is Hello " + hell0);

// String interpolation
console.log(`This is Hello ${hell0}`)


// String concatenation
let service = 'credit card';
let month = 'May 30th'; 
let displayText = 'Your ' + service  + ' bill is due on ' +  month + '.';
console.log(displayText); // Prints: Your credit card bill is due on May 30th.