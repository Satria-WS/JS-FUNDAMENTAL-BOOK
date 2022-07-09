//Getters and setters allow you to define Object Accessors(computed Properties)
//Js can secure better using getters and setters
//the name of a property to mean that the property should not be altered. Here’s an example of using _ to prepend a property.
//Getters can return the value of internal properties and setters can safely reassign property values

//Method get

//#1 Object data can be accessed using a getter.
var person = {
  firstname: "john",
  lastname: "tole" ,
  language: "alien",
  get lang() {
    // return this.language;
    return this.language.toUpperCase();//ALIEN
  }
};
// console.log(person.lang());//person.lang is not a function
console.log(person.lang); //alien

// different without method get
// #2 Object data can be accessed using property stored as a function.
var person = {
  firstname: "john",
  lastname: "tole" ,
  language: "alien",
  lang() {
    return this.language;
  }
};
console.log(person.lang()); //alien
//console.log(person.lang); //[Function: lang]






//Method set

// #1Create an object:
const this_set = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
  set lang(value) {
    this.language = value;
    this.firstName = value;
  }
};

// Set a property using set:
// name a set property must be same as an object
this_set.lang = "en";
//this_set.lang = this_set.firstName;

// Display data from the object:
// console.log(this_set.lang); //undefined
console.log(this_set.language); 
// person.lang = person.language; //en


//#2 This example uses a lang property to set the value of the language property
var person = {
  firstname: "john",
  lastname: "tole" ,
  language: "sansekerta",
  set lang(bahasa_english) {
    // this.language = bahasa_english;
    this.language = bahasa_english.toUpperCase();
  }
};

// Set a property using set:
person.lang = person.language;
// console.log(person.lang()); //Setter must have exactly one formal parameter.
// console.log(person.lang); //Setter must have exactly one formal parameter.
console.log(person.language);

//#3
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  
  get energyLevel() {
    if (typeof(this._energyLevel) === 'number') {
      return 'My current energy level is ' + this._energyLevel;
    } else {
      false;
    }
  }
};

console.log(typeof robot.energyLevel);//undefined
console.log(typeof(robot._energyLevel));//number
console.log(robot.energyLevel);








//Method set
// #3 Create an object:
const improve = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
  set lang(value) {
    this.language = value.toUpperCase();
    this.firstName = value + " Hello";
    this.x = value.toUpperCase();
    this.y =  "Hello "+value;

  }
};

// Set a property using set:
// name a set property must be same as an object
improve.lang = "en";
improve.lang = "andre";
//this_set.lang = this_set.firstName;

// Display data from the object:
// console.log(this_set.lang); //undefined
console.log(improve.y);
// person.lang = person.language; //


//#4
var person = {
  firstname: "john",
  lastname: "tole" ,
  language: 45,


  get lang() {
    return this.language;
  },

  set lang(bahasa_english) {
    // this.language = bahasa_english;
    if(typeof(this.language) === 'string') {
      this.language = bahasa_english.toUpperCase();
  } else {
    console.log(this.language + ' NOT STRING');
  }


  }
};

// Set a property using set:
person.lang = person.language;
// console.log(person.lang()); //Setter must have exactly one formal parameter.
// console.log(person.lang); //Setter must have exactly one formal parameter.
console.log(person.language);
