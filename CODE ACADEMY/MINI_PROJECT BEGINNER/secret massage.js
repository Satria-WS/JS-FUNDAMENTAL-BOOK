let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop() //
console.log(secretMessage.length) //23
secretMessage.push("to" , "program");
console.log(secretMessage .indexOf("get")); // index ke 7
secretMessage[7] = "right";
secretMessage.shift();
// console.log(secretMessage);
secretMessage.unshift("Programming");
// console.log(secretMessage);
secretMessage.splice(6,5,"know");
console.log(secretMessage);

console.log(secretMessage.join(' '));







