console.log(Boolean(10 < 4)); //false

let x = 0;
console.log(Boolean(x)); //false

let c = 1;
console.log(Boolean(c)); //true

let y = -0;
console.log(Boolean(y)); //false

let d = -1;
console.log(Boolean(d)); //true

let z = "";
console.log(Boolean(z)); //false

let g;
console.log(Boolean(g)); //false

let j;
j = "test";
console.log(Boolean(j)); //true

let A1 = false;
let A2 = true;
console.log(Boolean(A1)); //false
console.log(Boolean(A2)); //true
console.log(new Boolean(A2)); //[Boolean: true]
console.log(new Boolean(false)) //[Boolean: false]

console.log(typeof(A1)); //boolean
console.log(typeof(j)); //string
console.log(typeof(new Boolean(true))) // object

let Q = null;
console.log(Q); //null
console.log(Boolean(Q)); //false
console.log(typeof(Q)); // object


//random Boolean
let true_or_false = [true,false];
console.log(true_or_false);

var random_Bool = Math.floor(Math.random() * true_or_false.length) > 0.4
console.log(random_Bool);

//basic random Boolean
var randomNumber = Math.random() >= 0.5;
console.log(randomNumber);

var awesome = [2,4 ,4].length;
console.log(awesome)//3