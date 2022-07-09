//call back funttion statement #3


const even = (n) => {
  return n % 2 == 0;
}
 
const odd = (n) => {
  return n % 3 == 0;
}

let printMsg = (evenFunc, num) => {
//   const isNumEven = evenFunc(num);
  var even_or_odd = "";
  if (evenFunc(num)) {
    var genap = "even";
    even_or_odd += genap;
  } else {
    var ganjil = "odd";
    even_or_odd += ganjil;
  }
  console.log(`The number ${num} is an ${even_or_odd} was ${evenFunc(num)}.`)
}
 
// Pass in even as the callback function
printMsg(odd, 4); 
