//Javascript also has a featured called generator function

function* powers(number) {
  for (let current = number; ; current += number) {
    yield current;
  }
}

// console.log(powers(10).next())

let powerRanger = powers(1);
console.log(powerRanger.next());
console.log(powerRanger.next());
console.log(powerRanger.next());

