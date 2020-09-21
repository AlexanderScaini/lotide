const eqArrays = function(firstArray, secondArray) {
  for (let i in firstArray) {
    if (!(firstArray[i] === secondArray[i])) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;