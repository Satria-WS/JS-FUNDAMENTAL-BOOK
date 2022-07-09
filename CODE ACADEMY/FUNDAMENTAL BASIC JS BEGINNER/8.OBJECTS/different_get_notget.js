
//#1
//without get
var person = {
  _firstName: 'John',
  _lastName: 'Doe',
  fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
// To call the function method: 
console.log(person.fullName()); // 'John Doe'



//#2 with get
var person = {
  _firstName: 'John',
  _lastName: 'Cena',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
console.log(person.fullName); // 'John Doe'