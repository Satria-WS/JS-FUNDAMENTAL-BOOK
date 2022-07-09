//ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.

//#1
//In the previous exercise, we created a factory function that helped us create objects
var monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};

//#2
//Notice that we don’t have to repeat ourselves for property assignments
//This below is property value shorthand, to save ourselves some keystrokes.""
var monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};