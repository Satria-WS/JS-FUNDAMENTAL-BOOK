//var declarations are globally scoped or function scoped while let and const are block scoped.
/* let waktu = 9;
  if (waktu > 3) {
    var hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
  }
console.log(hello) //  "say Hello instead"
//if var hello, change to become let hello
console.log(hello) //  hello is not defined
 */



//function scope

var hello1 = "satu";
function jam() {
  var hello = "say Hello instead";
  console.log(hello1);// "say Hello instead"
}

// console.log(hello) //  hello is not defined


jam();