//#1
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

//#2
//Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.
let bobsFollowers = ["Bob memek" , "Bob kontol" , "Bob jancuk" , "Bob puting"];
let tinasFollowers =["Bob memek" ,"Bob kontol" ,"Tina crot"  ];
let mutualFollowers = [];

for (let i = 0 ; i < bobsFollowers.length ; i++) {
  for (let j = 0 ; j < tinasFollowers.length ; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      //mutualFollowers += tinasFollowers[j]
      //mutualFollowers.push(bobsFollowers[i]);
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
// mutualFollowers.push(bobsFollowers[i]);
console.log(mutualFollowers);





//#3
const input = "oiue";
const vowels = ['A' , 'I' , "UU" , "EE" , 'O'];//5
// let resultArray = [];
let resultArray;

for (let i = 0 ; i < input.length; i++) {
  if (input[i] === 'e')
    resultArray += input[i];
    resultArray = input

    
}

console.log(resultArray);

//#4
let input = "good morning";
input = "a whale of a deal!";
console.log(input.length);
//translate to whale talk
const vowels = ['A' , 'I' , "UU" , "EE" , 'O'];//5
let resultArray = [];
for (let i = 0 ; i < input.length; i++) {
  //console.log( "\n" + [i + 1]+"\n");
  for (let outer = 0; outer < vowels.length ; outer++) {
   // console.log(vowels[outer] );
     if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]); //[ 'u', 'u', 'u', 'u', 'u' ]
    // resultArray += input[i];//uuuuu
    // resultArray = input;
    }
  }
}
console.log(resultArray.join('').toUpperCase());



//#5
for (let i = 1; i <= 3; i++) {
    // second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}