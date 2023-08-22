const palindromes = function (string) {
  if (
    string.toLowerCase().split("").reverse().join("") === string.toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
