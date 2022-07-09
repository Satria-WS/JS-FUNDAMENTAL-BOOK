class Dog {
  constructor(name) {
    this._name = name;  
  }
  
  introduce() { 
    console.log('This is ' + this._name + ' !');  
  }
  
  // A static method
  static bark() {
    console.log('Woof!');  
  }

  static bark_dog(meow) {
    return Dog.bark()
    // return meow
  }
}
 
const myDog = new Dog('Buster');
myDog.introduce();///This is Buster !
 
// Calling the static method function
// Dog.bark();//Woof!
// Dog.bark_dog('Meow');
// Dog.bark_dog(Dog.bark());
Dog.bark_dog();

// 1 < length.substituteTeachers