//Recursion is a process of calling itself. A function that calls itself is called a recursive function.
//The syntax for recursive function is:
//To prevent infinite recursion, you can use if...else statement (or similar approach)

/*
//#1 
function recurse() {
  //function code
  //function call inside function
  recurse();
}
recurse(); 
*/

//#2
function recurse() {
  if(false) {
    recurse(); // if true , RangeError: Maximum call stack size exceeded
  }
  else {
    //stopcalling recurse
    console.log("recurse has been stopped")
  }
}
recurse();

//#3
//code this below will be error
// function factorial(x) {
//   return x * factorial(x - 1);
// }

// console.log(factorial(3));

//#4
// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}
console.log(factorial(2));