//A promise is an asynchronous action that may complete at some point and produce a value
//It is useful to think of promises as a device to move values into an asynchronous reality
let fifteen = Promise.resolve(15);
fifteen.then((value) => {
  console.log(`Got ${value}`);
});

//## function promise
