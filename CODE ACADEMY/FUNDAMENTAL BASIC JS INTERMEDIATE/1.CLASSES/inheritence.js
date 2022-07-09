class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}


//The extends keyword makes the methods of the Car class available inside the Model class
//The super() keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Model class to the constructor of the Car class. When the Class constructor runs, it sets this._name = name; for new Model instances.

class Model extends Car {
  constructor(brand,model) {
    super(brand); //this.carname
    this.model = model;
  }
  show1() {
    return this.present() + ', it is a ' + this.model;
  }
  show2() {
    return this.carname + ', it is a ' + this.model;
  }
}

const test_model1 = new Model('BMW' , 'xx-x1');
const test_model2 = new Model('Tesla' , 'x-2323');

console.log(test_model1.show1()); //I have a BMW, it is a xx-x1
console.log(test_model2.show2()); //Tesla, it is a x-2323