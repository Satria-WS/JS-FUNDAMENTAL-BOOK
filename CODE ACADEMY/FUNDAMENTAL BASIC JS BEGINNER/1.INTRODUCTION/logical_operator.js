//basical operataor
var mood = 'sleepy';
var tirednessLevel = 6;
if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep") 
} else {
  console.log("not bed time yet");
}

//play around with the || operator and the ! operator! 
var mood = !'sleepy';
var tirednessLevel = 6;
if (mood ===! "sleepy" || tirednessLevel > 8) {
  console.log("time to sleep") 
} else {
  console.log("not bed time yet");
}




let stopLight = ["green" , "red" , "yellow"];
let pedestrians = [0 , 2,  1];
// console.log(Math.floor(Math.random() * 3)); //integer with mathfloor
let x =  Math.floor(Math.random() * stopLight.length);
let y =  Math.floor(Math.random() * pedestrians.length);

if (stopLight[x] === 'green' && pedestrians[y] === 0) {
  console.log('Go!');
} else if (stopLight[x] === 'red' && pedestrians[y] === 1){
  console.log('Warning');
} else {
  console.log('Stop');
}