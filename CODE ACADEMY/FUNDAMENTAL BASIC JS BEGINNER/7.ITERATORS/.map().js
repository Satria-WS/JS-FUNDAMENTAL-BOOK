
// The .map() method exceuted a callback function on each element in am arrays
// it returns a new array made up of the return values from the callback function
//#1
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
const announcement = finalParticipants.map(person => {
  //concanate to string , loop each index on elements var finalParticipants
    return "Hello " + person ;
    //return person;
})
console.log(announcement);//['Hello Taylor', 'Hello Donald', 'Hello Don', 'Hello Natasha', 'Hello Bobby']

//#2
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(binatang => {
  return binatang[0];
}) 

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(numbers=> {
  return numbers / 100;
})

console.log(smallNumbers);