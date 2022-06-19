const WORDS =
  `The Secret Life of Objects
,Project: A Robot ,
Bugs and Errors ,
Regular Expressions ,
Modules ,
Asynchronous Programming ,
Project: A Programming Language ,
JavaScript and the Browser ,
The Document Object Model ,
Handling Events ,
Project: A Platform Game ,
Drawing on Canvas ,
HTTP and Forms ,
Project: A Pixel Art Editor ,
Node.js ,
Project: Skill-Sharing Website ,
Exercise Hints`
// let text = "How, are, you, doing, today?";
// const myArray = text.split(",");
// console.log(myArray)
console.log(WORDS.split(","))



const wordArrays = WORDS.split(",");
// console.log(wordArrays[0].toUpperCase());
console.log(...wordArrays)

//##remove new line Character or all line breaks
var str = " \n this is a string \n \n \n"
// console.log(str);
// console.log(str.trim());

const box = [];
// console.log(WORDS.split(",")[0])
// box.push(WORDS.split(",")[0])
// box.push(WORDS.split(",")[1])

var i = 0;
var j = 6;
while (i < wordArrays.length) {
  // console.log(j + "-" + wordArrays[i].trim())

  box.push(j + "-" + wordArrays[i].trim())
  j++
  i++
}


// console.log(...box)

const boxSingleQuotes = []

var i = 0;
while (i < box.length) {

  // console.log("'" + box[i] + "'")
  boxSingleQuotes.push("'" + box[i] + "'")
  i++
}

console.log(...boxSingleQuotes)