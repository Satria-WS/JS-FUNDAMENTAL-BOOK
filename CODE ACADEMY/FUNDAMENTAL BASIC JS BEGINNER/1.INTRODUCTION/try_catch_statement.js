//The try...catch statement is used to handle the exceptions. Its syntax is:
//syntax

try {

} catch(error) {

}

//#1
//In the above program, x variable is not defined. When you try to print the a variable, the program throws an error. That error is caught in the catch block.

var a = 3;
var b = 'a';
console.log(a * b);//NaN

try {
  console.log(a * b); ////NaN
  console.log(x); //catch error
} catch (error) {
  console.log('error tolong masukan lagi');
}


//#2
// try...catch...finally Example
//In the above program, an error occurs and that error is caught by the catch block. The finally block will execute in any situation ( if the program runs successfully or if an error occurs).
const numerator = 100,
  denominator = "a";

try {
  console.log(numerator / denominator);
  console.log(a);
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
} finally {
  console.log("Finally will execute every time");
}

//#3
//Note: When the throw statement is executed, it exits out of the block and goes to the catch block. And the code below the throw statement is not executed.
try {
    throw exception;
} catch(error) {

}


//#4
const number = 45;
try {
  if (number > 50) {
    console.log("Success");
  } else {
    // user-defined throw statement
    throw new Error("The number is low");
  }
} catch (error) {
    console.log("An error caught");
    console.log("Error message: " + error);  
}

//#5
const number = 5;
try {
  // user-defined throw statement
  throw new Error("This is the throw");
} catch (error) {
  console.log("An error caught");
  if (number + 8 > 10) {
    // statements to handle exceptions
    console.log("Error message: " + error);
    console.log("Error resolved");
  } else {
    // cannot handle the exception
    // rethrow the exception
    throw new Error("The value is low");
  }
}