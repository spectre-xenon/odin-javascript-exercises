const convertToCelsius = function (temp) {
  let convertedNum = ((temp - 32) * 5) / 9;
  let roundedNum = Math.round(convertedNum * 10) / 10;
  return roundedNum;
};

const convertToFahrenheit = function (temp) {
  let convertedNum = (temp * 9) / 5 + 32;
  let roundedNum = Math.round(convertedNum * 10) / 10;
  return roundedNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
