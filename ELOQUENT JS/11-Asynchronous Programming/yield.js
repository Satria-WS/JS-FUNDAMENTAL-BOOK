//#function generator
//value property is the result of evaluating the yield expression
//done property is false, indicating that the generator function has not fully completed.
//Each time the generator's next() method is called, the generator resumes execution,

//#sample1
function* generator(i) {
  //   yield i;
  yield i + 1;
  yield i + 2;
  yield i + 3;
  yield i + 4;
}

const gen = generator(10);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

//#sample2
function* countlessApple() {
  let saleList = [3, 7, 4];
  for (let i = 0; i < saleList.length; i++) {
    // console.log(saleList[i])
    yield saleList[i];
  }
}

const appleStore = countlessApple();
console.log(appleStore.next());
console.log(appleStore.next());
console.log(appleStore.next());
console.log(appleStore.next());


