const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());



const pets = ["dog" , "cat" , "bird"];
pets.shift();
pets.unshift("fish", "ferret");
pets.splice(2, 2, "pig", "duck", "emu");
pets.splice(2, 0, "pig", "duck", "emu");