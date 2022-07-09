/*
getters and setters intercept property access
JavaScript getter and setter methods are helpful in part because they offer a way to intercept property access and assignment, 
and allow for additional actions to be performed before these changes go into effect.
*/
//cannot double set in const myCat

const myCat = {
  _name: 'Snickers',
  get name(){
    return this._name
  },
  set name_url(newName){
    //Verify that newName is a non-empty string before setting as name property
    //check if newName is type string or not
    if (typeof newName === 'string' && newName.length > 0){
      this._name = newName;
    } else {
      console.log("ERROR: name must be a non-empty string");
    }
  }

}
// set a property useing set:
myCat.name_url = 123; //ERROR: name must be a non-empty string
//myCat.name_url = true;

console.log(myCat.name); //Snickers ,in get name
console.log(myCat._name);//Snickers , in property
