//#1
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  //return word.length < words.length;
  return word.length < 6; //// Output: ['chair', 'music', 'brick', 'pen', 'door']
})

console.log(shortWords);  //['chair', 'music', 'brick', 'pen', 'door']

//#2
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult); 
//console.log(result); //[32, 33, 40]

function checkAdult(age) {
  return age >= 18;
}
console.log(result); //[32, 33, 40]


//#3
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(numbers => {
  return  numbers < 250;
})

//#4
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(words => {
 return words.length > 7 //serene
})
