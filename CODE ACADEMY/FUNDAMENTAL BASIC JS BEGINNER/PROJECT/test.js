// let rainForests = ["Amazon","Borneo","Cerrado","Congo"];
// rainForests.splice(0,2);
// console.log(rainForests);

// let bear = {
//   sound: "roar",
//   roar(){
//     console.log(this.sound);
//   }
// }

// bear.sound = "grunt";
// let bearSound = bear.roar;
// bearSound();


// var thing;
// let func = (str = 'no arg') => {
//   console.log(str);
// }
// func(thing);
// func(null);

//Missing Line
// class RainForest{
//   static minimumRainFall = 60;
// }

// let congo = new RainForest();
// RainForest.minimumRainFall = 80;
// console.log(congo.minimumRainFall);


// var flagsJSON = '{ "countries" : [' +
// '{ "country":"Ireland" , "flag":"🇮🇪" },' +
// '{ "country":"Serbia" , "flag":"🇷🇸" },' +
// '{ "country":"Peru" , "flag":"🇵🇪" } ]}';
// var flagDatabase = JSON.parse(flagsJSON);



// var cat = {name:"Athena"};
// function swap(feline){
//   feline.name = "Wild";
//   feline = {name:"Tabby"};
// }
// swap(cat);
// console.log(cat.name);


// const x = 6 % 2;
// const y = x ? 'One': 'Two';
// console.log(y);


// console.log("I");

// setTimeout(() => {
//   console.log("love")
// }, 0);
// console.log("JavaScript!");



// var sound = "grunt";
// var bear = { sound: "roar"};
// function roar(){
//   console.log(this.sound);
// }



// let animals = ["jaguar","eagle"];
// animals.filter(e => e === "jaguar")
// console.log(animals.pop()); //Prints jaguar






// var pokedex = ["Snorlax", "Jigglypuff", "Charmander", "Squirtle"];
// pokedex.pop();
// console.log(pokedex.pop());

// console.log([3] == [3])


// What type of function can have its execution suspended and then resumed at a later point?



// var obj;
// console.log(obj)


// class X {
//   get Y() { return 42; }
// }
// var x = new X();



// const foo = {
//   bar(){
//     console.log("Hello, world!");
//   },
//   name: "Albert",
//   age: 26,
// }

// console.log(foo.name)



// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const obj2 = {
//   ...obj,
//   a: 0,
// };

// console.log(obj2.a, obj2.b);


// console.log(typeof(42.1));



const lion = 1;
let tiger = 2;
var bear;

++lion;
bear += lion + tiger;
 tiger++;