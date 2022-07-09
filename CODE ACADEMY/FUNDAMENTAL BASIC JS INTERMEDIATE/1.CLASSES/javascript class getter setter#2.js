//You can use the underscore character to separate the getter/setter from the actual property:
//#1
class Car {
  constructor(brand) {
    this.carname = brand;
    this.carnumber = 4;
  }
  get cnam() {
    return this.carname;
  }
  
  get number() {
      return this.carnumber;
  }

  set cnam(x) {
    this.carname = x;
  }
}
let myCar = new Car("Ford");
console.log(myCar.cnam);//ford
console.log(myCar.number);//4




//#2
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
    // daysOff = 20;
  }

  get name() {
    return this._name
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    // return this._remainingVacationDays - daysOff;
    this._remainingVacationDays -= daysOff; //accumulation
  }

  set remainingVacationDays(result) {
    this._remainingVacationDays = result;
  }

}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');



// console.log(surgeonRomero.takeVacationDays(4));
// console.log(surgeonRomero.takeVacationDays(34));
console.log(surgeonRomero.remainingVacationDays)//20



//after increment
// surgeonRomero.takeVacationDays(4);
console.log(surgeonRomero.remainingVacationDays);//16
//call takeVacationDays(daysOff)
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);//17
console.log(surgeonJackson.remainingVacationDays);//20