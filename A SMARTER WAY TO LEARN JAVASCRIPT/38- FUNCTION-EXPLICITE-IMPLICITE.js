//Implicit Coercion
var number = 12 + ""    //Output is "12" as number 12 is converted to string "12"
var number = "15" * 2    //Output is 30 as string 15 is converted to number 15
var number = "15" - "11" //Output is 4 as both the strings are converted to number
var number = undefined + 6 //Output is NaN as undefined could not be converted to number
var number = "Hello" + null  //Output is "Hellonull" as null is converted to string "null"
var number = null + 25     //Output is 25 as null is converted to 0.
var number = true + true //Output is 2 as true is converted to number 1.
var number = false + 10 //Output is 10 as false is converted to number 0.
var number = 10 * [6] //Output is 60 as [6] is converted to number 6.
var number = 10 * [10, 20] //Output is NaN as [10, 20] could not be converted to number


//Explicit Coercion
//JavaScript provides inbuilt methods for type conversion.

console.log(Number("25"))//Output is 25 as "25" string is converted to number 25
console.log(Number("")    ) //Output is 0 as "" string is converted to 0
console.log(Number([])    )//Output is 0 as [] is converted to 0
console.log(Number(null)  ) //Output is 0 as null is converted to 0
console.log(Number(true)  ) //Output is 1 as true is converted to 1
console.log(Number(false) )  //Output is 0 as false is converted to 0
console.log(Number("Test"))   //Output is NaN as "Test" could not be converted to number

