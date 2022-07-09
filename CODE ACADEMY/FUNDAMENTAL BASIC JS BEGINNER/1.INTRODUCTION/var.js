
//problem with var
var x = "hey hi";
function fine() {
var x = "Hello";
}
console.log(x);//hey hi


//Problem with var
var greeter = "hey hi";
  var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}
console.log(greeter) // "say Hello instead"

// var variables can be updated and re-declared
var x = 4;
//re-declared var x = 3;
var x = 3;
//updated x = 5
x = 5;



//let variables can be updated but not re-declared
let y = 5;
//if let y ,re-declared var y = 7; can be error
let y = 7; //Identifier 'y' has already been declared
//updated y = 9
y = 9;



//const varibles can't be update nor re-declared;
const z = 99;
const z = 17; //Identifier 'z' has already been declared
z = 19; // TypeError: Assignment to constant variable.



console.log(x);
console.log(y);
console.log(z);