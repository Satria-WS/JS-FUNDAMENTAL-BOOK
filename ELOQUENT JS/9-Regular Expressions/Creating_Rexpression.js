//Regular expression is a type of object
//when using the RegExp constructor , the pattern is written as a normal string
//using forward slash ends the pattern
//using backslash to be parts of the pattern
let re1 = new RegExp("abcdef");
let re2 = /abcdef/;
console.log(re1); // /abcdef/
console.log(re2); // /abcdef/
console.log(typeof re1); //object

//##example1
let eighteenPlus1 = /eighteen/;
let eighteenPlus2 = "/eighteen/";
console.log(typeof eighteenPlus1); //object
console.log(typeof eighteenPlus2); //string

//##example2
let eighteenPlus3 = /eighteen\+/; 
console.log(eighteenPlus3)// /eighteen\+/

//# Regular expression methode
//telling whether a match of the pattern true or false
let testReg1 = /true/.test(true);
let testReg2 = /"abc"/.test("abc");
console.log(typeof testReg1);//true boolean
console.log(typeof testReg2); //false boolean


