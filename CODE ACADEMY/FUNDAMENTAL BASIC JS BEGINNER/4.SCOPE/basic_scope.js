//global scope , (a value/function in the global scope can be used anywhere in the entire program)
// File or module scope (the value/function can only be accessed from within the file)
// Function scope (only visible within the function),
//Code block scope (only visible within a { ... } codeblock)

//var greeter is globally scoped because it exists outside a function while var hello is function scoped
var greeter = "hey hi";
 function greet() {
   var hello = "Hello World";
 }

 console.log(hello); // error: hello is not defined