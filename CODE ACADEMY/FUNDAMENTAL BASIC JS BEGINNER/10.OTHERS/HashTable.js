let obj = {
  Nathan: "555-0182",
  Jane: "315-0322"
}

const myMap = new Map();
myMap.set("Nathan", "555-0182");
myMap.set("Jane", "315-0322");

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

//The charCodeAt()
//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
const sentence = 'The';
console.log(sentence.length)

console.log(sentence.charCodeAt(1));// 104 = h  ASCII Printable Characters
// SYNTAX: sentence.charAt(index);
console.log(sentence.charAt(1));// h = 104   ASCII Printable Characters






//class HashTable

class HashTable {

  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
  }

  set(key, value) {
    const index = this.getIndex(key);
    this.buckets[index] = value;
  }

  get(key) {
    const index = this.getIndex(key);
    return this.buckets[index];
  }

  hash(key) {
    return key.toString().length;
  }

  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}

//Push
const car = ["xxx","yyy","zzz"];
let Push = "pusyy cat";
Push = car.push("ppp");

console.log(car);
// console.log(Push);