//##Evaluating data as code

//There are several ways to take data (a string of code)  and run it as part of the current program
//The most obvious way is the special operator level
//This is usually a bad idea because it breaks some of the properties that scopes normally have
const x = 1;

function evalAndReturnX(code) {
  let y;
  eval(code);
  return y;
}
console.log(evalAndReturnX("y = 99"));
console.log(x);
