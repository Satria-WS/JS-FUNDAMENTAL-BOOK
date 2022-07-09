//The Object.create() method
//It’ll more difficult if you have many methods and have to assign them manually.
//This is why the Object.create() method comes into play.
//creates a new object using an existing object as the prototype of the new object
const behavior = {
  getFullName() {
    return this.firstname + " " + this.lastname;
  }
}

function createPerson(firstname , lastname) {
  //So you can use the Object.create() as follows:
  let person = Object.create(behavior);
  person.firstname = firstname;
  person.lastname = lastname;
  return person;
}

//you can create person objects and call the methods of the behavior object:
let john = createPerson("TOLE" , "ASU"),
jane = createPerson("AMANTA" , "SUE");
console.log(john.getFullName());
console.log(jane.getFullName());