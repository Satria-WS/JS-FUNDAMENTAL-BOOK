function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}
 
const celcius_1 = process.argv[2];

//process.argv
// process.argv is an array holding the arguments provided. In this case, it looks like ['node', 'celsius-to-fahrenheit.js', '100']. So, process.argv[2] returns 100.
console.log(celsiusToFahrenheit(celcius_1));