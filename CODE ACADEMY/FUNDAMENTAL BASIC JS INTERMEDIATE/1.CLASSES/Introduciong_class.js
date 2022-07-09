//#1
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

//create instance
const halley = new Dog('Halley'); 
console.log(new Dog('Halley').name); //Halley , this is wrong a way
//console.log(halley.name); //Halley
console.log(halley.behavior); //0

///after increment
halley.incrementBehavior()
console.log(new Dog('Halley').behavior); //0 , this is wrong a way
console.log(halley.behavior);//1

//#2
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero' , 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson' , 'Orthopedics');