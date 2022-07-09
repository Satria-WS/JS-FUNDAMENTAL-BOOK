const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
function myExecutor(resolve,reject) {
  if(inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.')
  }
}
const promise = new Promise(myExecutor);
// console.log(promise)
const orderSunglasses = () => {
  return promise;
}

const orderPromise = orderSunglasses();
console.log(orderPromise);