//water-limits.js
//In this case, ./ is a relative path indicating that basic_modules.js is stored in the same folder as water-limits.js
const converters = require('./basic_module');

console.log(converters.celsiusToFahrenheit(489) + ' f');
console.log(converters.fahrenheitToCelcius(658) + ' c');

