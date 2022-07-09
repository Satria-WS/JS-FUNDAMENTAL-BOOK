//Nested Arrays
var nestedArr = [[1], [2, 3]];
var nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]

var nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2


//The first array element should hold the elements 1 and 2 in that order.
//The second array element should hold the elements 3 and 4 in that order.
//The third array element should hold the elements 5 and 6 in that order.
const numberClusters = [[1,2],[3,4],[5,6]];
console.log(numberClusters);
const target = numberClusters[2][1];
console.log(target);