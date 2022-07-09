//Js objects are passed as arguments to functions or methods
//they are passed by reference, not by value
//accesible and mutable can be canged inside that function

const origNum = 8;
const origObj = {color: 'blue'};
 
const changeItUp = (num, obj) => {
  var num = 7;
  obj.color = 'red';
};
console.log(changeItUp(origNum,origObj));//undefined
// Will output 'red' since objects are passed 
console.log(origObj.color);