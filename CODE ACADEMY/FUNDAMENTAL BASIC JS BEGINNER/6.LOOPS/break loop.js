//break statement loop
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for (let i = 0 ; i < rapperArray.length ;i++) {
  console.log(rapperArray[i]);
  console.log("And if you don't know, now you know.")
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}


//fint index of array:
//console.log(rapperArray.indexOf("Notorious B.I.G."));

