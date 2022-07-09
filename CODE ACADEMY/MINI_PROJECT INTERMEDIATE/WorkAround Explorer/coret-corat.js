const number = Math.floor(Math.random() * 5);

let countValue = new Promise(function (resolve, reject) {
  if( number === 1) {
    resolve("speed 1")
  } else if (number === 2) {
      resolve("speed 2") 
  } else if (number === 3) {
      reject("speed down") 
  } else {
      reject("speed turn off");
  }
});

function success(resolve) {
  console.log(resolve);
}
function bad(reject) {
  console.log('this is my bad');
//   console.log(reject)
}


//This is simple syntax code : contain resolve and reject
countValue.then(success, bad);

//This is different syntax code
countValue.then(success)
.catch(function bad(reject) {
  console.log(reject);
});

