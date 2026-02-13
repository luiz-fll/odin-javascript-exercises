const convertToCelsius = function(fahrenheit) {
  const result = (fahrenheit - 32) / (9/5);

  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  const result = (celsius * (9/5)) + 32;

  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
