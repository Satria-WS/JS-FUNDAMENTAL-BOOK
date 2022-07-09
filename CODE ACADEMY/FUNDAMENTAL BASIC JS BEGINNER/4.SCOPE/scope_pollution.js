// let num1 = 54; //global scope
var num1 = 54; //global scope

const lognum = () => {
  //if variable was declared let , var , const , can be glob4l scope
  num1 = 111; //global scope
  const num = 232;//local scope
  console.log(num);
}

lognum(); // 232
console.log(num1);//111


