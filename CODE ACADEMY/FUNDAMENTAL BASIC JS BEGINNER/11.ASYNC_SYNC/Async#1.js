//Asynchronous JavaScript
//Unlike our other example, JavaScript engine won’t execute the code above synchronously. Let’s take a look at the output below:

console.log("hello");
setTimeout(()=> {
  console.log("Hello 5 second");
},5000);
console.log("Im number 2");

// const gg = require("./Jancok.js").gg;
// console.log(gg)
const {gg} = require("./Jancok.js");
console.log(gg);
const {jj} = require("./Jancok.js");
console.log(jj);

