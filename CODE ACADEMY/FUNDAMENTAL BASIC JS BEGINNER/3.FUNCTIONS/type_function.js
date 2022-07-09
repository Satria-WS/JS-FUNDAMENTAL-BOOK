//There are 3 type function
//Constructor vs declaration vs expression


//function declaration
function multiply(x, y) {
  return x + y;
}
console.log(multiply(2,4));

//function expression without name function
var multiply = function(x,y) {
  return x * y;
};
console.log(multiply(2,4));

//function expression with name function
var multiply = function fucn_name(x,y) {
  return x - y;
};
console.log(multiply(2,4));

//function Constructor
//single line function 
var multiply = new Function ('x', 'y', "return x / y"); 
console.log(multiply(9,3));

