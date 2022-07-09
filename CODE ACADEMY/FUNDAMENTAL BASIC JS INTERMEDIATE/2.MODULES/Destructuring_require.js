const { celsiusToFahrenheit } = require('./basic_module');

const celsiusInput = process.argv[2];
const fahrenheit = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheit} degrees Fahrenheit`);