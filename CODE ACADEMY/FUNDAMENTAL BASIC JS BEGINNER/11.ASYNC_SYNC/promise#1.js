//A promise only passes if a certain criteria is true.

/*
3 way of writing asynchoronous Javascript

1.Pending — the initial state of the program before the promise passes or fails
2.Resolved — a successful promise
3.Rejected — a failed promise
*/

//create promise
let lapaer = !true;
lapaer = true;


const eat = new Promise((resolved,rejected) => {
  if(lapaer) {
  	const JunkFood = {
  		name:"Tole",
  		favoriteFood:"noodles",
  		location: "market square"
  	};
  	  resolved(JunkFood);
  } else {
  	  rejected(new Error("kenyang"));
  }
});




//using promise initialized before
//chain with catch and then

let LagiMakan = () => {
	eat.catch(() => {
		console.log("false");
	}).then(() => {
		console.log("true");
	}).then(() => {
		console.log("true");
	}).catch(() => {
		console.log("false");
	})
}

LagiMakan = () => {
	eat.then(() => {
		console.log("true");
	}).catch(() => {
		console.log("false");
	})
}


LagiMakan = () => {
	eat.then((JunkFood) => {
		console.log(JunkFood);
	}).catch((error) => {
		console.log(error.message);
	})
}

// LagiMakan();

// const Inside = () => {
// 	const JunkFood = {
//   		name:"Tole",
//   		favoriteFood:"noodles",
//   		location: "market square"
//   	};
//   	return JunkFood.favoriteFood;

// }

// console.log(Inside());


//create new Promise
const foodTour = (JunkFood) => {
  return new Promise((resolved,rejected) => {
  	const deliver = "on going to " + JunkFood.location;

    resolved(deliver);
  });
}

const manusa = "biasa";

async function willEat() {
  try {
  	let mantap = await manusa;
    let fastfood = await eat;
    let response = await foodTour(fastfood);
    console.log(response);
    console.log(fastfood);
    console.log(mantap);
  } catch(error) {
      console.log(error.message);
    }
}

willEat();










const list = [lapaer];
for(let i = 0 ; i < list.length ; i++) {
	module.exports = list[i];
}