// Logical Operator or
console.log(true || false); //true
console.log(3 > 4 || 4 < 5); //true
console.log(false || false); // false
console.log(10 > 100 || 10 > 20);  // false

//Logical Operator and
console.log(true && true);      // true
console.log(1 > 2 && 2 > 1);    // false
console.log(true && false);     // false
console.log(4 === 4 && 3 > 1);  // true

//convert or invert a Boolean value
//quantity from "!" can double like "!!" , can even "!!!"
let late = true;
let opposite = !late;
// console.log(late); // true
console.log(opposite); // false

let double = false;
let conversion = !!double
console.log(conversion);//false

let tripple = true;
let apple = !!!tripple;
console.log(apple); //false