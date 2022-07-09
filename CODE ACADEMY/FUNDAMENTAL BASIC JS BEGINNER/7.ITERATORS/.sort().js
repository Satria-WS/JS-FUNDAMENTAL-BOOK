//executes sequentially from top to bottom, A - Z
var numbers =  [2,34,4,5,1,3,4,5,6,4,2,45,41,1,4,52,1,2];
numbers.sort((a , b) => a - b);
console.log(numbers); //[1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5, 6, 34, 41, 45, 52]


//executes sequentially from top to bottom, Z - A
var numbers = [1 , 2 , 4 , 5 , 6 , 7];
numbers.sort((a , b) => b - a);
console.log(numbers);  //[7, 6, 5, 4, 2, 1]