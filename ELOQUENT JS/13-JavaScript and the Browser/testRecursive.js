function countDown(fromNumber) {
  console.log(fromNumber);
  countDown(fromNumber);
}

countDown(3);
//This countDown(3) will run until the call stack size is exceeded, like this:
//- Uncaught RangeError: Maximum call stack size exceeded.