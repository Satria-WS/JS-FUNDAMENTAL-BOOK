//Array Method .reduce() with function array
//sum each element in the array
var array_numbers = [1 , 2 ,3 ,4];
var sum = array_numbers.reduce((accumulator , speedator) => {
//   return accumulator; //1
//   return speedator; //4
  return accumulator + speedator; //10
})
console.log(sum);  


// #1 This example the sum of all numbers in an array:
//parameter total as (the initial value / previously returnd value);
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(this_function);
console.log(sum);// 99
function this_function (total , value) {
  //return total ;//45 the first index
  //return value; // 25 thelast index
  //return total + value; //99
  //return total - value; //-9
  return total * value; //64800
}


//#2 This example  sum of all numbers in an array with ANOTHER A WAY:
var numbers = [45, 4, 9, 16, 25];
var box = 0;
function total(var1) {
  for (var i = 0 ; i < numbers.length; i++) {
    box += var1[i];
  }
}
// console.log(total(numbers));//undefined
total(numbers);
console.log(box); //99

//#3 This example finds the  odd number with filter()
//The .filter() method executes a callback function on each element in an array.
var numbers = [1 , 2 , 4 , 5, 3,  4, 5, 6, 9, 4 ];
function isOddNumber(numbero) {
  return numbero % 2;
}
var oddnumbers = numbers.filter(isOddNumber);
console.log(oddnumbers);



//#4 This example finds the value number in above 5
//The .filter() method executes a callback function on each element in an array.
//he callback function for each of the elements must return either true or false
const ranmNumbers = [ 3, 4 , 24, 22, 11];
const filterArray = ranmNumbers.filter((new_number) => {
  return new_number > 5;
});
// console.log(filterArray);

//#5 make it shorter, you can use an anonymous function as a callback:
var numbers = [1, 2, 4, 7, 3, 5, 6];
var oddNumbers = numbers.filter(function(number) {
  return number % 2;
});
console.log(oddNumbers); // [ 1, 7, 3, 5 ]

//#6 arrow functions
var numbers = [1, 2, 4, 7, 3, 5, 6];
var arrow = numbers.filter(number => number % 2);
console.log(arrow); //[ 1, 7, 3, 5 ]