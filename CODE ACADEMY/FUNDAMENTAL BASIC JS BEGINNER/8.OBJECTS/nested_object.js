//#1
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
//invoke
spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'
let x = spaceship.nanoelectronics.computer.terabytes; //100
console.log(x);

let capFave = spaceship.crew.captain['favorite foods'];//[ 'cookies', 'cakes', 'candy', 'spinach' ]
capFave = spaceship.crew.captain['favorite foods'][0];//cookies
console.log(capFave);

//change passenger become array
spaceship.passengers = [{name:'putangina mo', age: '19'} , {name:'john cena' , age: 44}] ;
console.log(spaceship.passengers[0]);//{ name: 'putangina mo', age: '19' }
console.log(spaceship.passengers[1]);//{ name: 'john cena', age: 44 }
