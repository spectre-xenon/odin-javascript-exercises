const fibonacci = function (member) {
  if (member < 0) return "OOPS";

  let fibonacciArr = [1, 1, 2];
  let num1 = 1;
  let num2 = 2;
  let num3;
  for (let i = 0; i <= member; i++) {
    num3 = num2 + num1;
    num1 = num2;
    num2 = num3;
    fibonacciArr.push(num3);
  }
  return fibonacciArr[parseInt(member) - 1];
};

// Do not edit below this line
module.exports = fibonacci;
