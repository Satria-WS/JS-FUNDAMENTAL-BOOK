//that’s strange, why is dietType not defined even though it’s a property of goat? That’s because inside the scope of the .diet() method, we don’t automatically have access to other properties of the goat object.
//#1
// var goat = {
//   dietType: 'herbivore',
//   makeSound() {
//     console.log('baaa');
//   },
//   diet() {
//     console.log(dietType);
//   }
// };
// goat.diet(); // Output will be "ReferenceError: dietType is not defined"

//#2
var tiger = {
  dietType: 'carnivore',
  makeSound() {
    console.log('Grrrrr');
  },
  diet() {
    console.log(this.dietType);
  }
};
 
tiger.diet(); 
// Output: carnivore