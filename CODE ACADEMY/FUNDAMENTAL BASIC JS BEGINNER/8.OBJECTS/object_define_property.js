//The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
//The syntax for using Object.defineProperty() is:
/* 

The Object.defineProperty() method takes three arguments.

The first argument is the objectName.
The second argument is the name of the property.
The third argument is an object that describes the property.



*/

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42

