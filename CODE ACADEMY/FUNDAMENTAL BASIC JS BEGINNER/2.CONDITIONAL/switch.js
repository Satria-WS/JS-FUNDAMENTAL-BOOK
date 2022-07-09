//#1
//switch statement , using math floor and math random
let jackpot_togel =  ["babi" , "lele" , "uler"];
switch (jackpot_togel[Math.floor(Math.random() * 4)]) {
  case "babi" :
    console.log("1juta");
    break;
  case "lele" :
    console.log("3juta");
    break;
  case "uler" :
    console.log("9juta");
    break;
  default:
    console.log("99juta")
    break;
} 

//#2
//Switch With multiple case
let fruit = 'apple';
switch(fruit) {
  case 'apple':
  case 'manggo':
  case 'pineapple':
    console.log(`this is ${fruit}`)
    break;
  default:
    console.log(`this is not ${fruit}`)  
}