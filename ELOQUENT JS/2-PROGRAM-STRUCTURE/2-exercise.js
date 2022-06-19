//##looping triangle
//my answer
var i = 0;
var hashTag = "";

while (i < 7) {
  hashTag += "#";
  console.log(hashTag)
  i++;
}
//book answer
for (let line = ""; line.length < 8; line += "#") {
  console.log(line);

}


//##Fizzbuzz program
//my answer
var i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  }
  i++;
}
//book answer
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}



//##Chess Board
//my answer
var i = 0;
var chess = "";

function chessboard(width, height) {
  while (i < 4) {
    // chess += " #";
    console.log(" # # # #")
    console.log("# # # #")
    i++;
  }
}
chessboard()
//book answer
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);