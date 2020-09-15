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
      return console.log(false);
    }
  }
  return console.log(true);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
