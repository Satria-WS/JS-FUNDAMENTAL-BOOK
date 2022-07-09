//sample#1
function simple(food) {
	const JunkFood = {
  		name:"Tole",
  		favoriteFood:food,
  		location: "market square"
  	};
  	return JunkFood;
}
// simple("tai kucing");

function pesan(food) {
  return simple("daging babi").name;
}
console.log(pesan());


//sample#2
function fabregas() {
	return "Hello";
}

function result() {
	return fabregas();
}
 console.log(result())

 //sample#3

 function RMS() {
 	const JunkFood = {
  		name:"Mike",
  		favoriteFood:"Daging Anjing",
  		location: "market square"
  	};
  	return JunkFood;
 }

 function Gojeck(food) {
 	return RMS();
 }
 console.log(Gojeck());


//sample#4
let JunkFood = {
  		name:"ajamWER",
  		favoriteFood:"Daging Kucing",
  		location: "pasarSebat"
  	};

function secret(secret) {
  return secret.name;
}
console.log(secret(JunkFood));//ajamWER
// console.log(secret(RMS()))//Mike

function addPerson() {
	return secret(RMS())
}
// console.log(addPerson());

function changePerson(Person) {
    let Change = secret(RMS());
    Change = Person;
	return Change;
}
console.log(changePerson("Ajam GG"));

function upGrade(Person) {
  return changePerson(Person);
}
function downGrade(Person = "guest") {
  return upGrade(Person);
}
console.log(downGrade());

function Fixable(Person,Animal) {
  if(Person =! person) {
  	console.log(true);
  }
  return false;
}