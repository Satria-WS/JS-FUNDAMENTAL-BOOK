//JS Sets
//A Js Set is a collection of unique values.
//Each value can only occur once in a set

/* 
Essential Set Methods :
new Set(), Creates a new Set
add() , Adds a new aleements to the set
delete(), Removes an elements from a Set
has(), Returns true if a value exists in the Set
forEach(), Invokes a callback for each elemetns in the Set
values(), Returns an iterator with all the values in a Set
size , Return the number of elements in a Set
*/



//new Set() Creates a new Set
var letters = new Set(["a","c","s","d","d","s","d"]);
console.log(letters); //Set { 'a', 'c', 's', 'd' }

var letters = (["a","c","s","d","d","s","d"]);
console.log(letters.size);//undefined

//Using size method
var letters = new Set(["a","c","s","d","d","s","d"]);
console.log(letters.size);// 4

//Using add method
var box = new Set();
box.add("1");
box.add("b");
box.add("c");
console.log(box); //Set { '1', 'b', 'c' }

//create variable inside set method
var box = new Set();
const a = "a";
const b = "b";
const c = "c";
box.add(a);
box.add(b);
box.add(c);
console.log(box); //Set { 'a', 'b', 'c' }

// The forEach() Method
const numbers = [2,32,42,42,4];
let txt = "";
numbers.forEach(myfunc);
function myfunc(value , index, array) {

  txt += value;
//   console.log(value);
//   console.log(index);
//   console.log(array);
}
console.log(txt);



//getters and setters
const myCat = {
  get name() {
    return this.name;
  },
  set name(newName) {
    if (typeof newName === "string" && newName.length > 0){
      this.name = newName;
    } else {
      console.log("This is ERROR !!!")
    }
  }
}

