class School {
  constructor(name,level,numberOfStudents) {
    this._name = name;//string
    this._level = level;//string
    this._numberOfStudents = numberOfStudents;//number

  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents){
    if(typeof(newNumberOfStudents) === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school ${this.level}.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
     console.log(substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)])
  }
 
}
class PrimarySchool extends School {
  constructor(name,numberOfStudents, pickupPolicy) {
    super(name ,'primary' , numberOfStudents) ;
    this._pickupPolicy = pickupPolicy;  
  }  
  get PrimarySchool() {
    return this._pickupPolicy;
  }
  
  
}

class HighSchool extends School{
  constructor(name,numberOfStudents,sportsTeams) {
    super(name, 'high' , numberOfStudents)
    this._sportsTeams = sportsTeams;//array of strings
    
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

class MiddleSchool extends School  {
  constructor(name, numberOfStudents , averageTestScores, schoolOverview) {
    super(name,'middle',numberOfStudents)
    this.averageTestScores = averageTestScores;//number
    this.schoolOverview = schoolOverview;//string
  }
  get averageTestScores() {
    return this.averageTestScores;
  }
}
  class SchoolCatalog extends School {
    constructor(name , numbersOfStudents) {
      super(name,numbersOfStudents)
       this.schoolOverview = [];// array string
       this.averageTestScores = []//array number

    }
  }



const lorraineHansbury = new PrimarySchool('Lorraine Hansbury' , 514 , 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);//Jamal Crawford - random

const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;//[ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]

