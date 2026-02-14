const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let result = 0;
  numbers.forEach(element => {
    result += element;
  });

  return result;
};

const multiply = function(numbers) {
  let result = 1;
  numbers.forEach(element => {
    result *= element;
  });

  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
