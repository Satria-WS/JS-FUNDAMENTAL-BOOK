//## Higher-Order Functions

let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total); //55

//##callbackfunction
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
// repeat(4, console.log);
//## create a function value on the spot instead
repeat(6, (l, j) => {
  labels.push(l);
});
console.log(labels);

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
console.log(whiteRabbit);
let hungryRabbit = { type: "hungry, speak" };
console.log(hungryRabbit);