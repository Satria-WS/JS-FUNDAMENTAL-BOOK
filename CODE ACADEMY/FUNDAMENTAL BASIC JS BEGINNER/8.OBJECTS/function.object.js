var spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

var greenEnergy = Energy => {
  Energy['Fuel Type'] = 'avocado oil';
  
};

var remotelyDisable = remote => {
  remote.disabled = true;
};

greenEnergy(spaceship);//change property
remotelyDisable(spaceship); //add property
console.log(spaceship); // view result spaceship



//#2
var spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

var greenEnergy = (eNergy_terbarukan) => {
  eNergy_terbarukan['Fuel Type'] = 'avocado oil';
}

function remotelyDisable(remote) {
  remote.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship['Fuel Type']);
console.log(spaceship.disabled);

console.log(spaceship);