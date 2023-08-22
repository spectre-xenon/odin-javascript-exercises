const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  let finalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    finalSum += arr[i];
  }

  return finalSum;
};

const multiply = function (arr) {
  let finalMultiply = arr[0];
  for (let i = 1; i < arr.length; i++) {
    finalMultiply *= arr[i];
  }
  return finalMultiply;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0 || num === 1) return 1;

  let finalFactorial = 2;
  for (let i = 3; i <= num; i++) {
    finalFactorial *= i;
  }
  return finalFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
