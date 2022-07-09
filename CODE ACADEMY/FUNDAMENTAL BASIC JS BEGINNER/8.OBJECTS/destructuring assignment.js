//The number of varibales can be less than the total properties of an object
//#1
const rubiksCubeFacts = {
  possiblePermutations: '43,252,003,274,489,856,000',
  invented: '1974',
  largestCube: '17x17x17'
};
//detructuring assignment
const {possiblePermutations , invented ,largestCube} = rubiksCubeFacts;
console.log(possiblePermutations); //43,252,003,274,489,856,000
console.log(invented); //1974
console.log(largestCube); // 17x17x17

//#2
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

//usually technique
var residence = vampire.residence; 
console.log(residence); // Prints 'Transylva

//We can even use destructured assignment to grab nested properties of an object:
var { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

var { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'




//#3
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
console.log(functionality);
 functionality.beep();
 
// const { beep } = robot.functionality;
// beep();