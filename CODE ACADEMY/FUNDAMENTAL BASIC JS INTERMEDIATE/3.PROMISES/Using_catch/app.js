// const {checkInventory} = require('./library.js');
import {checkInventory} from './library.js'

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
//basic syntax
//promiseObject.then(onFulfilled, onRejected);
//promiseObject.then().catch();
checkInventory(order).catch(handleSuccess , handleFailure);
checkInventory(order).then(handleSuccess).catch(handleFailure);