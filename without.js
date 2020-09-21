const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log(`✔️ Assertion Passed: ${actual}  === ${expected}`);
    return true;
  } else {
    // console.log(`✖️ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (!assertEqual(firstArray[i], secondArray[i])) {
      return false;
      // return console.log(`The first array's ${i} index is ${firstArray[i]}\nThe second array's ${i} index is ${secondArray[i]}`);
    }
  }
  return true;
  // return console.log(`The array's are the same!`);
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return console.log(`✔️ Assertion Passed`)
  } else {
    return console.log(`✖️ Assertion Failed`)
  }
};

const without = function(sourceArray, itemsToRemove) {
  let resultingArray = sourceArray;
  for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArray[i] === itemsToRemove[j]) {
        resultingArray.splice(i, 1);
      }
    }
  }
  return console.log(resultingArray);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;