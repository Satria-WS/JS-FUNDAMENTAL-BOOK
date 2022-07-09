//avoid copying the same code all over again and again,
//When a function creates an object, it is called a factory function.

//createperson is factory function because it returns a new object
function createperson(firstname, lastname) {
  return {
    firstname: firstname,
    lastname: lastname,

    getFullname() {
      return firstname + " " + lastname;
    }
  }
}
// the following code uses the createperson() factory function to create two objects john and jane
let john = createperson("jon", "doe") ,
    jane = createperson("jane" , "doe");

console.log(john.getFullname()); //jon doe
console.log(jane.getFullname()); //jane doe


console.log(createperson("jon" , "doe"));

console.log(typeof john);  //object
console.log(typeof createperson); //function
console.log(typeof john.getFullname()); //string
console.log(typeof createperson("jane" , "doe"));//object