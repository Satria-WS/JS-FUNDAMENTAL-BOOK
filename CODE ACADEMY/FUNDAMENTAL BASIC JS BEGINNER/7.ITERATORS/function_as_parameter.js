//#1
function hello(x) {
  return "Hello world";
}
function sempal(y) {
  return y();
}
console.log(sempal(hello));


//#2
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 3; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParamenter => {
   let t1 = Date.now();
   let t2 = Date.now();
   funcParamenter()
   return t2 - t1;
}
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func , val) => {
  let first = func(val);
  let second = func(val);
  if (first === second) {
    return first;
  } else {
    return "This function returned inconsistent";
  }
}
checkConsistentOutput(addTwo,3);
