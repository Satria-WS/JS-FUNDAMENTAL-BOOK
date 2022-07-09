// constructor function
//In JavaScript, a prototype can be used to add properties 
function Person () {
    this.name = 'John',
    this.age = 23
    
}

// creating objects
const person1 = new Person();


// adding property to constructor function
Person.prototype.gender = 'cewe';
console.log(Person.prototype); //{ gender: 'cewe' }
const person2 = new Person();

// changing the property value of prototype
Person.prototype = { gender: 'laki' }
console.log(Person.prototype); //{ gender: 'laki' }

//Add Methods to a Constructor Function Using Prototype
Person.prototype.belanja = function() {
  return this.age;
}
const person3 = new Person();
console.log(person3.belanja());//23