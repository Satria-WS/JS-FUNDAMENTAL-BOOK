let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 

//invoke function
spaceship.crew.captain.cheerTeam(); //'You got this!'

//loop spaceship
for (var property in spaceship ) {
    console.log(property);//crew
};

for (var property in spaceship.crew ) {
    // console.log(property);//captain , chief officer  , medic , translator
    // console.log(spaceship.crew[property]);
};

for (var property in spaceship.crew.captain ) {
    // console.log(property);// name ,  degree, cheerTeam
    console.log(spaceship.crew.captain[property]);
};
// Write your code below
for (var property in spaceship.crew) {
  // console.log(spaceship.crew[property]);
  // console.log(property); // captain, chief, officer, medic, translator
  // console.log(spaceship.crew[property].name); // Lily , Dan , Clementine , Shauna
  // console.log(spaceship.crew[property].degree); // Computer Engineering,Aerospace Engineering,Physics,Conservation Science
  // console.log(`${property}: ${spaceship.crew[property].name}`);
  console.log(`${spaceship.crew[property].name}: ${spaceship.crew[property].degree}`);

}