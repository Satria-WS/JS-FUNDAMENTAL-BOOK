const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;

//if the condition currentCard = 'spade', is looping will stop
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}



//
var cards = ['diamond', 'spade', 'heart', 'club'];
var currentCard;
currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard);