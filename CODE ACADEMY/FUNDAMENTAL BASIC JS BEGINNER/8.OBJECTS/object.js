//OBJECT
//An object is a bulit in data type for storing key-values pairs.
//Data inside objects are unordered
//VAlues can be of any type


//Key names must either be strings or valid identifier variables name
//not allowed in key names in string
const apple = {
  color: "Green",
  price: {
    bulk: "$2/kg",
    smallQty: "$4/kg"
  }
};
console.log(apple.color); //Green
console.log(apple.price.bulk) //$2/kg
console.log(apple.price.smallQty); //$4/kg


//Javascript objects are mutable , meaning their contents can be changed
//even when declared as const, new propersties can be added
//existing property values can be changed or deleted
const club = {
  name: "Juventus" ,
  position: 1 ,
  League: 'A'  
}
console.log(club);//{name: 'Juventus', position: 1, League: 'A'}
//loop const club
for (let key in club) {
//   console.log(key); //name ,position , League
//   console.log(club.key);//undefined
  console.log(club[key]);
}


//Delete Operator
const people = {
  firstName: "Jason",
  age: 23,
  hobby: "Darts",
  goal: "Learning Material Arts"
};

delete people.hobby;
console.log(people);

//In JavaScript, an object can also contain a function
const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person.greet(); // hello