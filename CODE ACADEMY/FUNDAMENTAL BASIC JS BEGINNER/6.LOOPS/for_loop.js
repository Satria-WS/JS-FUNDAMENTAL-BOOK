//loop is a programming tool that is used to repeat a set of instructions
//Iterate is term that means "to repeat" in the context of loops
//A loop will continue to iterate until a specified condition
//for loop can do anything like negative increment(i--) , positive increment(i = i + 4)

//for loop with break
for (let i = 0; i < 6; i += 1) {
  if(i == 4) {
    break;
  }
  console.log(i);
}

//Looping through Arrays as the .length
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//Looping throught Arrays and then add to variable text
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
for (let i = 0; i < cars.length ; i++) {
  text += cars[i];
  //text += cars[i] + ",";
}
console.log(text); //BMWVolvoSaabFordFiatAudi
//BMW,Volvo,Saab,Ford,Fiat,Audi,


//Statement1 , declare variable first , and initiate many values (separated by comma)
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var i, len, box;
for ( i = 0 , len = cars.length, box = ""; i < len; i++) {
  box += cars[i];
}
console.log(box); //BMWVolvoSaabFordFiatAudi

//Statement 2
//declare i , len first
//store cars.length in var len
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var len = cars.length;
var text = "";
for(; i < len;) {
  text += cars[i];
  i++
}
console.log(text); //BMWVolvoSaabFordFiatAudi


//LOOP SCOPE
//using var in a loop
var i = 2;
for (var i = 0; i < 10; i++) {
  // console.log(i); // 0-9
}

//usiing let in a loop
let j = 0;
for (let j = 2 ; j < 9; j++) {
  // console.log(j); // 2-8
}


