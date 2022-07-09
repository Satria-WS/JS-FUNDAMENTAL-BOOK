/*
So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number
Here’s an example with numbers:
*/


//JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:
// Use short circuit evaluation to assign  variable below:
var username = '';
var defaultName = username || 'Stranger';
console.log(defaultName); // Prints: Stranger






//check input username
var username = '';
var defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
console.log(defaultName); // Prints: Stranger



let wordCount = 1;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}



