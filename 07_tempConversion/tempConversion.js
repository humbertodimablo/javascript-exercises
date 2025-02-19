const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit -32) *(5/9);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsious) {
  const fahrenheit = (celsious *  (9 / 5)) + 32;
  return Math.round(fahrenheit * 10) / 10
};

const celsiousConversion = (convertToCelsius());
const fahrenheitConversion = (convertToFahrenheit(-10));

console.log(celsiousConversion);
console.log(fahrenheitConversion);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
