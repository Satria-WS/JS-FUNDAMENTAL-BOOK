//This function can then be invoked during the execution of that higher order function (that it is an argument of).
//The functions can be passed as arguments

const isEven = (n) => {
  return n % 3 == 0;
}
isEven(9)//true;
 
let printMsg = (evenFunc, num) => {
//   const isNumEven = evenFunc(num);
//   console.log(`The number ${num} is an odd number: ${isNumEven}.`)
  console.log(`The number ${num} is an odd number: ${evenFunc(num)}.`)
 // console.log(`The number ${num} is an odd number: ${num(evenFunc)}.`)//TypeError: num is not a function
}
 
// Pass in isEven as the callback function
//functions can be passed as arguments
printMsg(isEven, 9); 

