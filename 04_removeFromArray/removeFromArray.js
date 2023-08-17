const removeFromArray = function (Array, ...args) {
  return Array.filter((item) => {
    return !args.includes(item);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
