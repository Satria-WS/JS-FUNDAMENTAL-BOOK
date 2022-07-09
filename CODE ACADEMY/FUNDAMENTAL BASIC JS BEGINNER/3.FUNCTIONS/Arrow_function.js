//Arrow function with 3 argument
let number1 = "red potion";
const number2 = "Egg";
var number3 = "Mana potion";

const sum = (number1 , number2 , number3) => {
  var number4 = "sempak sakti";
  //return number1 number2 // Unexpected identifier
  return number1 + " " + number2 + " " + number3;
  return number2; //unreachable code
  return number3; //unreachable code
}
console.log(sum(number1, number2, number3));
//console.log(number4); //is not defined


//Arrow function with no arguments
const printhello = () => {
  console.log("Hello World");
};
printhello(); //"Hellow World"


//Arrow functions with a single argument
//Arrow functions with a single parameter do not require () around the parameter list.
const check_weight = weight => {
  console.log(`Baggage weight : ${weight} kilograms.`);
  const check_weight = 4;
  console.log(check_weight);
};
check_weight(23); //Baggage weight : 23 kilograms.



//Arrow function
//a shorter way to write functions by using the special "fat arrow" () => notation
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
