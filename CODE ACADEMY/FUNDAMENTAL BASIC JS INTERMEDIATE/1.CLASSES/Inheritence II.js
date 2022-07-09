class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
  //  this.remainingVacationDays -= daysOff;     //TypeError: Cannot set property remainingVacationDays of #<HospitalEmployee> which has only a getter
   this._remainingVacationDays -= daysOff;
  }
}


class Doctor {
  constructor(name, insurance) {
    this._name = name;
    this._insurance = insurance;
    this._remainingVacationsDays = 20;
  }
  takeVacationDays() {
    
  }
}

class Nurse {
  constructor(name, certifications) {
    this._name = name;
    this._certifications = certifications;
    this._remainingVacationDays = 20;
  }
  takevacationDays() {
    
  }

  addCertification() {

  }
  
}
const employer = new HospitalEmployee('Tole');
employer.takeVacationDays(3);
console.log(employer.remainingVacationDays)


