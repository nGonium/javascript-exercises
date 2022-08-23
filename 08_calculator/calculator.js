const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  if (!nums.length) return 0;
  return nums.reduce( (sum, num) => sum + num);
	// Non-higher order function implementation
  // let sum = 0;
  // for (el of nums) {
  //   sum += el;
  // }
  // return sum;
};

const multiply = function(nums) {
  return nums.reduce( (product, num) => product * num);
  // Non-higher order function implementation
  // let product = 1;
  // for (num of nums) {
  //   product *= num;
  // }
  // return product;
};

const power = function(num, exp) {
	return num ** exp;
};

const factorial = function(num) {
	let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
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
