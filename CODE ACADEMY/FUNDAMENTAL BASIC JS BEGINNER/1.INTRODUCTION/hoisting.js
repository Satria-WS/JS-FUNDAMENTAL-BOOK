/*
We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined. 
 */

//Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. For example,
//#1
greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}


//#2
//using test before declaring
console.log(test)
var test;

//#3
var test;
console.log(test);


//#4
//variable hoisting
// program to display value
a = 5;
console.log(a);
var a; // 5
// program to display value
var a;
a = 5;
console.log(a); // 5




//#5
// program to display value
var a = 4;

function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); // hello
console.log(b);//Uncaught ReferenceError: b is not defined