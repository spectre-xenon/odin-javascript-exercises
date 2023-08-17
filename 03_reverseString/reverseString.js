const reverseString = function (string) {
  let lastItemIndex = -1;
  let stringArr = string.split("");
  let reversedStringArr = [];

  for (let i = 0; i <= stringArr.length; i++) {
    reversedStringArr.splice(lastItemIndex, 0, stringArr[i]);
    lastItemIndex -= 1;
  }

  let finalString = reversedStringArr.join("");
  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
