//let is block scoped #1
let greeter = "hey hi";
let times = 4;

if (times > 3) {
  let greeter = "say Hello instead"; 
  let times = 5;
  console.log(greeter) // say Hello instead
  console.log(times) //  5
}
console.log(greeter) // "hey hi"
console.log(times)// 4

//let is block scoped #2
let waktu = 9;
  if (waktu > 3) {
    var hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
  }
console.log(hello) //  "say Hello instead"
//if var hello, change to become let hello
console.log(hello) //  hello is not defined

//let is block scoped #3
let greeter = "hey hi";
let times = 4;
if (times > 3) {
  //let times = 59;
  var times = 5;
}
console.log(times); //Identifier 'times' has already been declared


//let can be updated but not re-declared.
let greeting = "say Hi";
//let greeting = "Dragon ball"; // error: Identifier 'greeting' has already been declared
greeting = "Kame-kameha";
console.log(greeting);



// However, if the same variable is defined in different scopes, there will be no error:
let say = "say Hi";
  if (true /* or false */) {
    let say = "say Hello instead";
    console.log(say); // "say Hello instead"
  }
console.log(say); // "say Hi"


// if you try to excecution let variable before declaration, you'll get a Reference Error.    
console.log(anduk);//ReferenceError: Cannot access 'anduk' before initialization
let anduk = "sendal";


//if var variable can be excecution but the result will be undefined
console.log(sempak);
var sempak = "sakti";//undefined

console.log(sendal); //Cannot access 'sendal' before initialization
const sendal = "swallow";
