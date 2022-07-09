//Parent Class
class School {
  constructor(name,level,numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;

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
  set numberOfStudents(check_number){
    if(typeof check_number === 'number') {
      this._numberOfStudents === check_number;
    } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
        // return 'wrong character'
    }
  }
  
  quickFacts() {
    
  }
  static pickSubstituteTeacher() {
    
  }
  
}

//Child Class
class Primary extends School {
  constructor(name ,level, numberOfStudents, pickupPolicy) {
    super(name,level,numberOfStudents) ;
  
    this._pickupPolicy = pickupPolicy;
    
  }  
  policy() {
    return this._name + ' has ' + this._level + ' dicipline ';
  }
  
  
}


//Answer: 

const name_test = new Primary('anak Dajjal' , 'primary' , 55)
/*
get name() {
  return this._name;
}

get level() {
    return this._level;
  }
*/




// console.log(name_test.name);
// console.log(name_test.level);
// console.log(name_test.policy());

/*
get numberOfStudents() {
  return this._numberOfStudents;
} 
 */

console.log(name_test.numberOfStudents)