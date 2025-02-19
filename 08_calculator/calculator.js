const add = function(a , b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
 return arr.reduce((total, current) => total + current, 0); 
};

const multiply = function(arr) {
return arr.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
let product =1;
for (let i =n; i > 0; i--) {
  product *= i;
}
return product;
}; 

const addResult = add();
const subtractResult = subtract();
const sumResult = sum([0]);
const multiplyResult = multiply([0]);
const powerResult = power();
const factorialResult = factorial(10);
console.log(addResult);
console.log(subtractResult)
console.log(sumResult);
console.log(multiplyResult);
console.log(powerResult);
console.log(factorialResult);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
