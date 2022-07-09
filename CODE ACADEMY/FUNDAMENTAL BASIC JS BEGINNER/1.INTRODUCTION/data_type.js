//Data types describe the different types or kinds , will be working with and storing in variables
//5 basic types of data or primitive

/* //6 types of data primitive
- strings 
- numbers
- booleans
- undefined , Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
- null , This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
- symbol , A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now. 


//1 types of data non primitive
- object , collections of related data
*/
//refrence : https://www.edureka.co/blog/data-types-in-javascript/


//The undefined data type means that the variable has been created, but has never been given a value
//Null is similar to undefined, except it has to be set intentionally .  but it's that way because a developer told it it was empty or nothing. 
let rokok;
console.log(rokok);//undefined
console.log(typeof rokok);
//I have a value, and maybe as a developer for reasons later on, I decide I want that rhyme gone. I can set it to null. I've done this as a developer on purpose, using variable assignment with the equal sign.
let rhyme = "9";
//the purpose rhyme set value null, for remove value "9"
//we can blank it out by passing in null.
rhyme = null;
console.log(rhyme);
console.log(typeof rhyme); //object