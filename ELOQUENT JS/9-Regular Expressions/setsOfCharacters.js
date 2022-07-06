//##test number1
let testNumber1 = /[0-9]/.test("in 1992");
let testNumber2 = /[0123456789]/.test("in 1992");
// console.log(testNumber1); //true
// console.log(testNumber2); //true

//##testdate2
let dateTime1 = new RegExp(/\d\d-\d\d-\d\d\d\d \d\d:\d\d/);
let dateTime2 = new RegExp("dd-dd-dddd dd:dd");
let dateTime3 = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime1); ///\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log(dateTime2);// /dd-dd-dddd dd:dd/
console.log(dateTime3); ///\d\d-\d\d-\d\d\d\d \d\d:\d\d/

//##Ruang Time

let RuangTime2 = dateTime2.test("01-30-2003 15:20");



console.log(RuangTime2);//false