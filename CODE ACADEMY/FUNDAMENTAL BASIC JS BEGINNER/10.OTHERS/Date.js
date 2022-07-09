//Creating Date Objects
/* 
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
 */
//Specifying a day higher than max, will not result in an error but add the overflow to the next month:

const d = new Date();
//7 numbers specify year, month, day, hour, minute, millisecond:
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
//6 numbers specify year, month, day, hour, minute, second:
const d = new Date(2018, 11, 24, 10, 33, 30);
//5 numbers specify year, month, day, hour, and minute:
const d = new Date(2018, 11, 24, 10, 33);
//4 numbers specify year, month, day, and hour:
const d = new Date(2018, 11, 24, 10);
//3 numbers specify year, month, and day:
const d = new Date(2018, 11, 24);
//2 numbers specify year and month:
const d = new Date(2018, 11);
//1 numbers specify year
const d = new Date(2018);


//Previous Century
//One and two digit years will be interpreted as 19xx:
const d = new Date(99, 11, 24);
//new Date(dateString)
const d = new Date("October 13, 2014 11:13:00");



//new Date(milliseconds)
const d = new Date(0);
const d = new Date(100000000000);
const d = new Date(-100000000000);
const d = new Date(86400000);


//Method converts a Date object to a string
//When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
const d = new Date();
d.toDateString();//Wed Dec 15 2021




//new Date() store in variable
var clock = new Date();
console.log(clock); //Mon Dec 13 2021 07:25:46 GMT+0700 (Western Indonesia Time)
console.log(clock.getFullYear()); //2021
console.log(clock.getMonth() + 1);// 11 + 1
console.log(clock.getDate())//13
console.log(clock.getHours()); // 7
console.log(clock.getMinutes()) //44
console.log(clock.getMilliseconds())//640



//if not store in variable
console.log(new Date().getDate())