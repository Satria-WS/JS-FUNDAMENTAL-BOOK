//#1
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

//const myCar = Car("FGranturismo" , 2002); ////Class constructor Car cannot be invoked without 'new'
const myCar = new Car('AUDI', 2003);
console.log(`My car ${myCar.name} build on ${myCar.year}`);
console.log(this.name); //undefined
console.log(this.year); //undefined
//console.log(myCar.this.name); //TypeError: Cannot read property 'name' of undefined

//#2
//create class method named "age"
class Bycle {
  constructor(student, grade) {
    this.student = student;
    this.grade = grade;
  }
  //function
  age() {
    let date = new Date();
    return date.getFullYear() - this.grade; //Gets the year, using local time
  }
}
let myBycle = new Bycle('BMX', 2009);
console.log(myBycle.age());

//#3
//create class method with parameter
class club {
  constructor(name_club, years_founded) {
    this.name_club = name_club;
    this.years_founded = years_founded;
  }
  age(x) {
    return x - this.years_founded;
  }
}
let myClub = new club('Real Madrid', 1990);
console.log(myClub.age(2021)); //31

console.log('Hello');
