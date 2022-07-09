//The Map object holds key-value pairs

//Hash Map
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five']
])
console.log(myMap);
//console.log(myMap.get(1))//one
console.log(myMap.size);//5
myMap.delete(5);
console.log(myMap.size);

let kudanil = 'lumping Horse';

function Map0s(myMap) {
  for(let i = 1; i <= myMap.size; i++) {
  	//console.log(i);
  	console.log(myMap.get(i));
  }
}
Map0s(myMap);


const map1 = new Map();
map1.set('a', 1);
console.log(map1);

//Syntax HashMap
/*

obJect.size() returns the # of elements in the hashmap
obJect.get(<key>) returns the value of the element of the given key
obJect.has(<key>) checks to see if the hashmap contains the key that is passed as an argument
obJect.set(<key>, <value>) accepts 2 arguments and creates a new element to the hashmap
obJect.delete(<key>) deletes the key/value pair that matches the key that is passed in as an argument
obJect.clear() clears all elements from the hashmap

*/


