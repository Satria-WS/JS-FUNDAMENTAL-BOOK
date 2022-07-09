let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat: function I_miss_You () {
    console.log(retreatMessage);  
  },
  takeOff: function () {
    console.log('Spim... Borp... Glix... Blastoff!');
  },

   war() {
    console.log('Begin to war');
  },

  landing: () => {
    console.log('got landing');
  }
}

//add function to object
alienShip.sempak = function() {
  console.log('Hello');
}


alienShip.retreat();
alienShip.takeOff();
alienShip.sempak();