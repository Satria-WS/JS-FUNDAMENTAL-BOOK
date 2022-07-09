//Js getters and setters restricted
//identifier that matches the getter and setter method names, but begins with an underscore_

const myCat = {
  _name: "Dottie",
  get name() {
    return this._name;
  },
  set change_Name(newName) {
    this._name = newName;
  }
}

//Reference invokes the getter
console.log(myCat.name); //Dottie

//Assignment invokes the setter
myCat.change_Name = "invoker";
console.log(myCat.name)//invoker