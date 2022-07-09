//callback functions
//callback function is a function that is passed onto another function as an argument

//Statement #1
const home = () => {
  return "Hello world";
}
home();
let homes = home;
homes = home();
//console.log(homes); //[Function: home]
//console.log(homes()); // Hello world
const greet = () => {
  //return homes() + " greet " + "to my homes";
  return homes + " greet " + "to my homes";
  //return homes(); //"Hello World"
}
console.log(greet());
//Statement#2
const isEven = (n) => {
  return n % 2 == 0;
}
//console.log(isEven(4)); //true

let printMsg = (evenFunc , num) => {
  return "the number " +  num + " is " +  evenFunc; 
}
//console.log(printMsg(true, 4));//the number 4 is true
console.log(printMsg(isEven(4)),4) //the number undefined is true 4 , this is wrong place
console.log(printMsg(isEven(4) , 4)) // the number 4 is true)


