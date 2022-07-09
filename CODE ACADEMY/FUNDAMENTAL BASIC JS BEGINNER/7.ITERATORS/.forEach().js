//#1
//Arrow function
//.forEach() method exceuted a callback function on each of the elements in an array in order
var numbers = [11 , 34 , 23 , 54, 35];
numbers.forEach(nomorcode => {
  //loop each index on elements
  //console.log(numbers);
  console.log(nomorcode * 2);//
});

//#2 
//Inline callback function
const groceries = ["brown sugar" , "salt" , "cranberries" , "walnuts"];
groceries.forEach(function (groceryItem) {
  console.log(groceryItem);
})

//3
//callback function
let ratings = [5, 4, 5];
let sum = 0;

let sumFunction = async function (a, b) {
  return a + b
}
ratings.forEach(async function(rating) {
  sum = await sumFunction(sum, rating)
})

console.log(sum)
// Naively expected output: 14
// Actual output: 0
