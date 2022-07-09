let input = "good morning";
input = "a whale of a deal!" .toUpperCase();
console.log(input.length);
//translate to whale talk
const vowels = ['A' , 'I' , "U" , "E" , 'O'];//5
let resultArray = [];
for (let i = 0 ; i < input.length; i++) {
  //console.log( "\n" + [i + 1]+"\n");
  for (let outer = 0; outer < vowels.length ; outer++) {
   // console.log(vowels[outer] );
   if (input[i] === vowels[outer]) {
     if (input[i] === 'A' || input[i] === 'I' || input[i] === 'O') {
       resultArray.push(input[i])
      } else {
        resultArray.push(input[i] + input[i]);
      }
    }
  }
}

//console.log(resultArray);
console.log(resultArray.join('').toUpperCase());


