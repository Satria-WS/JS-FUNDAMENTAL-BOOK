let raceNumber = Math.floor(Math.random() * 1000);
// runner > 18 years, 9.30 am early adult, race number :1000 < x ;
// runner > 18 years, 11.00 am late adult, race number: 1000 > x ;
// runner < 18 years, 12.30 pm All youth, race number: 1000 > x ;
//raceNumber += 1000;

//output:
//runner > 18 years , registered early. console:race number: xxx  , 9.30 am
//runner > 18 years , registered early. console:race number: xxx  , 9.30 am
//runner < 18 years , registered early. console:race number: xxx  , 12.30 am


console.log(raceNumber);

let runner_regist = Math.floor(Math.random() * [true,false].length) > 0.5;
let runner_ages = Math.floor(Math.random() * 69 - 14) + 14;
//console.log(runner_regist) //true or false

//Using ternary operator
//Create a control flow statement that checks whether the runner is an adult AND registered early.
runner_regist && runner_ages > 18 ? raceNumber += 1000 : raceNumber += 0; 
console.log(raceNumber);

//if expression
if(runner_ages > 18 && runner_regist === true  ) {
  console.log(` Race Number : ${raceNumber}\n Start Race  : 9.30 am`)
} else if (runner_ages > 18 && runner_regist === false) {
  console.log(` Race Number : ${raceNumber}\n Start Race  : 11.00 am`)
} else if (runner_ages < 18 && runner_regist === true) {
  console.log(`  check registration desk`)
} else {
  console.log(`  check registration desk`)
}
