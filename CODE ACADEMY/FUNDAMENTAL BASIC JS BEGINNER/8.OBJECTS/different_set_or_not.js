//setter
//different using set and not

//#1
//using set
const person = {
  _age: 39,

  set age(newAge) {
    this._age = newAge;
    // this._Not_age = newAge;
  },
  get ages() {
    return this.age;
  }
}

console.log(person._age);//39

person.age = 34;
person.age = 4555;
console.log(person._age);

//invoke get ages 
console.log(person.ages);//undefined


//#2
//not
const people = {
  name: "John",
  _age: 44,

}
//before change
console.log(people._age);//44
//after change
people._age = 47;
console.log(people._age);//47
