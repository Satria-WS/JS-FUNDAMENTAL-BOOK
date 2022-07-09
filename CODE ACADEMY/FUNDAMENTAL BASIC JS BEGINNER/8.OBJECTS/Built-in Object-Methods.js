//Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
//target , The target object — what to apply the sources’ properties to, which is returned after it is modified.
//sources , The source object(s) — objects containing the properties you want to apply.
//#1
var target = { a: 1, b: 2 };
var source = { b: 4, c: 5 };

var returnedTarget = Object.assign(target, source);
// console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // expected output: Object { a: 1, b: 4, c: 5 }


var target = { a: true, };
var source = { b: false };

var returnedTarget = Object.assign(target, source);
console.log(returnedTarget); //{ a: true, b: false }




//#2
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true});
console.log(newRobot);