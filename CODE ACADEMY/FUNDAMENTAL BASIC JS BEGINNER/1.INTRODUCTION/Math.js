// Math.random() used with Math.floor() can be used to return random integers.
console.log(Math.random()); //0. 1-float
console.log(Math.random() * 4); // 1-float
console.log(Math.floor(Math.random() * 4)); //integer with mathfloor
console.log(Math.floor(Math.random() * 10) + 1); //integer with mathfloor

//The Math.ceil() function always rounds a number up to the next largest integer.
console.log(Math.ceil(43.8)); //44
console.log(Math.ceil(43.4)); //44
//The Number.isInteger() method determines whether the passed value is an integer.
console.log(Number.isInteger(2016)); //true
console.log(Number.isInteger(2021.23)); //false
//The Math.round() function returns the value of a number rounded to the nearest integer.
console.log(Math.round(4.49)); //4
console.log(Math.round(4.5)); //5
//The Math.floor() function returns the largest integer less than or equal to a given number.
console.log(Math.floor(5.95));//5
//The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1
console.log(Math.random());//0.09198514934195456
//The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
console.log(Math.min(2, 3, 1)); //1
//The Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
console.log(Math.max(1, 3, 2)); //3


//Range With math random
//getRndInteger(min,max)
function getRndInteger(min , max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndInteger(0,4));//0-3

var experience = Math.floor(Math.random() * 69); // 0-69
var experience = Math.floor(Math.random() * 69) + 14;
var experience = Math.floor(Math.random() * (69 - 14)) + 14; // 14 - 68

console.log(experience);

console.log("Hellow" + "\n" + "javacript");