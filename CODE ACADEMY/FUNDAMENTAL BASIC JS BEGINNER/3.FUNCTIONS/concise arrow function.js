// We’ll explore a few of these techniques below:

//1# Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

//Zero parameters or no parameter
const functionname = () => {
};
//one parameter
const functionname = parameterone => {};
//Two or more parameters
const functionname = (para1,para2,para3) => {
};


//2# A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

//single-line block
const numbero = number => number + number;
//multiline block
const sumbero = number => {
    const sum = number + number;
    return sum;
};


//convert to single line block
const squareNum = (num) => {
  return num * num;
};
//refactor the function to
//since it has a single parameter. The parentheses around num have been removed
const squareNum = num => num * num;



//cannot using return function for concise arrow
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
const plantNeedsWater = day => day === 'Wednesday' ? true : false;

//Concise body syntax (with one parameter) does not use parentheses, curly braces, or the return keyword.
const areaOfCircle = radius => Math.PI * radius * radius;