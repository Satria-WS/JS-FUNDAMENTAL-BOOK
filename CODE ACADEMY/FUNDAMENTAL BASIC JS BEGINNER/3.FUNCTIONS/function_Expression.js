//This is function declaration
//Function declarations are used to create named functions.\
// function expressions are not hoisted so they cannot be called before they are defined.
function rocket() {
  return "Duar!";
}
console.log(rocket());//Duar!


//Function Expressions or Anonymous function
//Function declarations are used to create named functions.

//This below An anonymous function expression
//An anonymous function expression. Behaves exactly like a named function expression.
const dog = function() {
  return "Woof!";
}
console.log(dog());//Woof!

//It is also possible to provide a name inside the definition in order to create a named function expression:
//This below function expression
const myFunction = function name_namedFunction() {
  console.log("Hello cat!");
}
myFunction();
//name_namedFunction();//name_namedFunction is not defined
