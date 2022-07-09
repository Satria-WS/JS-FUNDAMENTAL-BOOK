// const It cannot be updated or re-declared.
const x = 4;
x = 5;
console.log(x); //TypeError: Assignment to constant variable.


const greeting = "say Hi";
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared


//declare const object
const talk = { message : "how are you", waktu : 4 };
talk.message = "say helo"; //say helo

console.log(sendal); //Cannot access 'sendal' before initialization
const sendal = "swallow";


/* conclusion:
- var declaration are globally scoped, while let and const are block scoped
- var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
- (hoisted)if variable has excecutioned before declare variable, the result: var variables are initialized with undefined, let and const variables are not initialized.
- While var and let can be declared without being initialized, const must be initialized during declaration
*/