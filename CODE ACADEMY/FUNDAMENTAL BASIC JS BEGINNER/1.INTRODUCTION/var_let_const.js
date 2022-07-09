// var variables can be updated and re-declared
var x = 4;
//re-declared var x = 3;
var x = 3;
//updated x = 5
x = 5;



//let variables can be updated but not re-declared
let y = 5;
//if let y ,re-declared var y = 7; can be error
let y = 7; //Identifier 'y' has already been declared
//updated y = 9
y = 9;



//const varibles can't be update nor re-declared;
const z = 99;
const z = 17; //Identifier 'z' has already been declared
z = 19; // TypeError: Assignment to constant variable.



console.log(x);
console.log(y); 
console.log(z); 


/* conclusion: 
- var declaration are globally scoped, while let and const are block scoped
- var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
- (hoisted)if excecutioned before declare variable, the result: var variables are initialized with undefined, let and const variables are not initialized.
- While var and let can be declared without being initialized, const must be initialized during declaration
*/