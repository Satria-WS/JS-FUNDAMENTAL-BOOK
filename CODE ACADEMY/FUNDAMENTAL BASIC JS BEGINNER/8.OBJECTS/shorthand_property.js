//explicitly declaring the value after the key)
//In this proccess , an object is created where the property names of that object match variables which already exist in that context
const games = "Borderland 3";
const library = {games};
console.log(games) //Borderland 3
console.log(library); //{games: 'Borderland 3'}
