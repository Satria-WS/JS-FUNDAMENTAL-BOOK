//factory function often accept parameters in order to customize the returned object
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log("Pusss Meong!");
    }
  }
}

//create animal factory function , create 1 object

let dog = dogFactory("Pusy" , 7 , "Persian" );
// console.log(dog.dogFactory()); //TypeError: dog.dogFactory is not a function
dog.bark()
