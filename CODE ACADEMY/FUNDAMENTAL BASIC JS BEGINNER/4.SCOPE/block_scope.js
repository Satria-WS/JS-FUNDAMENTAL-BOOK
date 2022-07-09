//#1
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    var sempak = "red";//global scope 
    // const sempak = "kuning";//local scope
    // let sempak = "putih";//local scope
    console.log(color); // pink
  }
  console.log(color); // blue
  console.log(sempak); 
};
//console.log(color); // ReferenceError
logSkyColor();


//#2
// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);
const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};
//console.log(getRandEvent());
// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    //let days = 50;//undefined 
    days = 50;
  } else if (event === 'Triathlon') {// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};
//console.log(getRandEvent());

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    let days = 50;
  } else if (event === 'Triathlon') {
    let days = 100;
  } else if (event === 'Pentathlon') {
    let days = 200;
  }
  return days;
};
console.log(getTrainingDays('Marathon'));
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};
//console.log(getTrainingDays('Marathon'));
console.log(getTrainingDays(getRandEvent()));


