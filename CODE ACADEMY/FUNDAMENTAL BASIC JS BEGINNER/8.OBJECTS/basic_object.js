//craeting an object
let student = { };

//adding a property
student.name = "john";

//adding a method
student.greet = function() {
  console.log("Hello");
}

//accesing a method
student.greet()//hello

//This keyword example
const person = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); }
};

person.greet();