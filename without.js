const without = function(array, itemsToRemove) {
  let result = array;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (array[i] === itemsToRemove[j]) {
        result.splice(i, 1);
      }
    }
  }
  return result;
};

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;