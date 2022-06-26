//## JSON stringify
//convert object to string (JSON)
var obj = { name: "John", age: 30, city: "New York" };
let string = JSON.stringify({ squirrel: false, events: ["weekend"] });
console.log(obj);
console.log(JSON.stringify(obj)); //{"name":"John","age":30,"city":"New York"}
console.log(string); // → {"squirrel":false,"events":["weekend"]}

//## JSON parse
//convert text (JSON) into a Objext
var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj); //{ name: 'John', age: 30, city: 'New York' }
