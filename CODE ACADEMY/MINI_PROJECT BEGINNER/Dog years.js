//this is my age
let myAge = 28; 
let earlyYears = 2;
earlyYears *= 10.5;
//rumus dog
let laterYears = myAge - 2;
laterYears *=4;
//this is mydog in years in early year
console.log(earlyYears);//21
//this is mydog in years in last years
console.log(laterYears);//104

let myAgeInDogYear = earlyYears + laterYears;
console.log(myAgeInDogYear);

const myName = "SATRIA".toLowerCase();
console.log(myName)

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYear} years old in dog years.`)