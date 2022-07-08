//##Iteration Protocol
const someArray = [1, 3, 5, 7, 9];
const iterator = someArray[Symbol.iterator]();
console.log(iterator); //Object [Array Iterator] {}

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(...iterator); //7 9


//##User-defined iterables
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...myIterable]); // [1,2,3];


//##Group Prototype
