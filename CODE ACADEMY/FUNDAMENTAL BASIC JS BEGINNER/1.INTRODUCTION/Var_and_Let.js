// var variables and let can be re-declared and update
// var variables can be multiple Identifier
var greet = "morning";
var greet = "noon";
var greet = "sandwich";

//let variables can't be multiple Identifier
//multiple Identifier let variable  still error even though not execution
let x = "dragon ball";
let x = "kame-kameha"; //SyntaxError: Identifier 'x' has already been declared


console.log(greet); //sandwich
//console.log(x); //SyntaxError: Identifier 'x' has already been declared

//execution before declare var variable value;
console.log(thanks); //undefined
var thanks = "so much";

//execution before declare let variable value;
console.log(arigato); //Cannot access 'thanks' before initialization
let arigato = "gozhaimaseu";

//While var and let can be declared without being initialized, const must be initialized during declaration.
var zeus ;
let chorono ;
const valk; // Missing initializer in const declaration
console.log(zeus); //undefined
console.log(chorono); //undefined
console.log(valk); //  Missing initializer in const declaration