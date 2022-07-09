//#1
//The .reduce() Method
const numbers = [1 , 3 , 4 , ,5 ,7 ];
const sumberNums = numbers.reduce((accumulator , currentValue) => {
  //return accumulator + currentValue;
  return accumulator; //1
  return currentValue; //7
});

console.log(sumberNums);

//#2
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator , currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10) 
console.log(newSum);

//#3
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// Something is missing in the method call below
console.log(words.some((word) => {
  return word.length < 6;
}));
// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
})
// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => word.length > 5       ));


//#4
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word);
