function celsiusToFahrenheit(celsius) {
  return celsius * (9/5) + 32;
}

//1 way
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

//2 way
module.exports.fahrenheitToCelcius = function (fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}