/* 

jumbledNums is an array that contains elements that are numbers.
const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
The callback function is an arrow function that has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.
*/


const jumbledNums = [123, 25, 78, 9, 5]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  //check condition whether index of the first element which evaluates to true for that condition.
  return num < 9;
});
//5 in the index 4
console.log(lessThanTen); //4



const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
console.log(greaterThan1000); // Output: -1