//##encapsulation
//underscore (_) character at the start of property names to indicate that those properties are private.
//Separating interface from implementation is a great idea. It is usually called encapsulation.

//##Method
//methods are nothing more than properties that hold function values
let rabbit = {};
rabbit.speak = function (line) {
  console.log("The rabbit say " + line);
};

// console.log(rabbit);
// rabbit.speak("Hello");

function speak(line) {
  console.log(`The ${this.type} rabbit says ${line}`);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry, speak" };
whiteRabbit.speak("hello world");
// hungryRabbit.speak("i cound use a carrot right now"); //eerror, speak is not function
// console.log(whiteRabbit);
console.log(whiteRabbit);
//## call method
speak.call(hungryRabbit, "Burp!");

//## call and map method
function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}
normalize.call({ coords: [4, 6, 8], length: 9 }); //[0.44 , 0.66 , 0.88]

//##Prototypes
var empty = {};
console.log(empty.toString);
