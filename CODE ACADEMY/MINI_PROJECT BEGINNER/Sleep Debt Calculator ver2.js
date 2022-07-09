const getSleepHours = day => {
  //the number of hours sleep
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 3;
  } else if (day === "wednesday") {
    return 5;
  } else if (day === "thursday") {
    return 9;
  }  else if (day === "friday") {
    return 1;
  }  else if (day === "saturday") {
    return 5;
  }  else if (day === "sunday") {
    return 14;
  }  else {
    return "You are wrong"
  }
}
//console.log(getSleepHours("tuesday"));


const getActualSleepHours = () => 
getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday"); 
//const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
//console.log(getActualSleepHours());//45

const getIdealSleepHours = (idealHours) => {
  //let idealHours = 9;
  return idealHours * 7;
}
console.log(getIdealSleepHours(8));//63

const calculateSleepDebt = () => {
  let actualSleepHours =  getActualSleepHours()//45
  let idealSleepHours = getIdealSleepHours()//63

  if ( actualSleepHours ===  idealSleepHours) {
    console.log("You has perfect sleep");
  } else if ( actualSleepHours > idealSleepHours) {
    console.log("got more sleep");
  } else {
    console.log("should get some rest");
  }


}
//calculateSleepDebt();