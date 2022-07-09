const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 3; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    } else {
      console.log('no problem at all');
    }
  }
}
// checkThatTwoPlusTwoEqualsFourAMillionTimes()

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
console.log(is2p2.name);