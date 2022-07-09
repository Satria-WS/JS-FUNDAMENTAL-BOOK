// function babi() {
// 	console.log("Helolo");
// }

// var value = Math.floor(Math.random() * 2);
// console.log(value);

// let randomNumber1 = Math.floor(Math.random() * 7 );
// console.log(randomNumber1)


// let random1_to_6 = Math.floor(Math.random() * 6 ) + 1;
// let random2_to_6 = Math.floor(Math.random() * 6 ) + 1;

// let player1 = random1_to_6;
// console.log(player1)
// let player2 = random2_to_6;
// console.log(player2)

// if(player1 === player2) {
// 	console.log(" You draw");
// } else if (player1 > player2) {
// 	console.log("player1 win")
// } else if(player1 < player2) {
// 	console.log("player2 win")
// }


// function anotherAddEventListener(typeOfEvent, callback) {
// 	var eventThatHappened = {
// 		eventType: "keypress",
// 		key:"p",
// 		durationOfKeypress:2
// 	}

// 	if(eventThatHappened.eventType === typeOfEvent) {
// 		callback(eventThatHappened);
// 	}
// }

// anotherAddEventListener("keypress" , function(event) {
// 	console.log(event);
// })


let today = new Date();
let Daily = today.getDay();


var option = {
  weekday: "long",
  day: "2-digit",
  month: "long"
};

// var day_1 = today.toLocaleDateString("en-US",{ year: 'numeric' });
var day = today.toLocaleDateString("en-US",option)
console.log(day);



// let d = new Date(2010, 7, 5);
// let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
// let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
// let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
// console.log(`${da}-${mo}-${ye}`);


function hello() {
	return {
	a: "tole",
	b: "jancok"
	};
}
console.log(hello().a);
