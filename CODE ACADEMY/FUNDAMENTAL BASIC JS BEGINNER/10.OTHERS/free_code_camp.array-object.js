//refrence : https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/

const team = {

  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11,
  }],

};
// console.log(team._players['firstName']);
console.log(team._players[0]['firstName']);//pable
console.log(team._players[0].firstName); //pablo



let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },

  ]

//How  push car to cars
  let car = {
 "color": "red",
 "type": "cabrio",
 "registration": new Date('2016-05-02'),
 "capacity": 2
}
cars.push(car);
console.log(cars[0]['color']);//purple
console.log(cars[0].registration)//2017-01-03T00:00:00.000Z



//#3
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.events[3])//running