//this refers to a method's calling object
//it can be used to access propertis belonging to that object
//using this keyword, can access its name property
//#1
const cat = {
  name: "Popey",
  age: 4 ,
  //function , using this keyword
  whatisname() {
    // return this.name
    // return this.age
    console.log(this.name);
    console.log(this.age);
  }
}
cat.whatisname();

//#2
const restaurant = {
  numCustomers: 45,
  seatCapacity: 140,
  availableSeats() {
    return this.numCustomers - this.seatCapacity;
  }
}
console.log(restaurant.availableSeats());

//#3
const robot = {
  model: '1E78V2',
  energyLevel: 100,

provideInfo() {
  return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};

console.log(robot.provideInfo());