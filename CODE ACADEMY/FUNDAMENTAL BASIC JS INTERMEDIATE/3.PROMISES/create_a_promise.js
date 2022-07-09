//#1
let promise = new Promise(function(resolve , reject) {
	resolve("This file has been resolve");
	// resolve("This is hello world");
	// reject("This file no reject")//error
})
console.log(promise); //Promise { 'This file has been resolve' }


//#2
//Chaining the promise with then()
let countValue = new Promise(function (resolve,reject) {
  resolve("Promise resolve")
})
//The then() method is called when the promise is resolved successfully.
countValue
  .then(function succesValue() {
  	console.log('result is completed');
  })


  //#3
  // the promise is rejected. And the catch() method is used with a promise to handle the error.
let skill = 0;
let x_tigger = new Promise(function(resolve , reject) {
	// resolve("The ultimate has been full");
	// reject("THe ultimate depleted");
	if (skill === 1) {
		resolve(" ready");
	} else {
		reject(" not ready");
	}
})

x_tigger.then(
  function x_skill(resolve) {
    console.log('blade skill ' + resolve);
    },
  )
.catch (
  function error_skill(reject) {
    console.log('skill cooldown ' + reject );
    }
  )
// console.log(x_tigger);