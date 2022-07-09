//##parsing
//that reflects the structure of the program contained in that text.
//If the text does not form a valid program, the parser should point out the error.
var json1 = '{"name": "Peter", "age": 22, "country": "United States"}';
var json2 = { name: "Peter", age: 22, country: "United States" };
var objParse = JSON.parse(json1);
var objStringfy = JSON.stringify(json2);
console.log(objParse);
console.log(objStringfy);


var arr = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
// Converting JS array to JSON string
var json = JSON.stringify(arr);
console.log(json)