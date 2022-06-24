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
//The JavaScript prototype property allows you to add new properties to object constructors:
var empty = {};
console.log(empty.toString);
console.log(empty.toString());

//##inheritence with Object.create()
var parent = {
  hair: "curly",
  eyes: "blue",
};
var children = Object.create(parent);
console.log(parent);
console.log(children);
console.log(typeof parent);
console.log(typeof children);

//##inheritence with property
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = {
  phi: 3.14,
  area: function () {
    return this.phi * 4;
  },
};

function Triangle(base, height) {
  this.base = base;
  this.height = height;
}

Triangle.prototype.area = function () {
  return 0.5 * this.base * this.height;
};

var circle = new Circle(5);
var triangle = new Triangle(4, 7);

// console.log(circle.area());
// console.log(triangle.area());

