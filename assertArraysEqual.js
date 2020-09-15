let failureIndex = 0;

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
      failureIndex = firstArray[i];
      return false;
      // return console.log(`The first array's ${i} index is ${firstArray[i]}\nThe second array's ${i} index is ${secondArray[i]}`);
    }
  }
  return true;
  // return console.log(`The array's are the same!`);
};

const assertEqualArrays = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return console.log(`✔️ Assertion Passed`)
  } else {
    return console.log(`✖️ Assertion Failed`)
  }
}


assertEqualArrays([1, 2, 3], [1, 2, 3]) // => true
assertEqualArrays([1, 2, 3], [3, 2, 1]) // => false

assertEqualArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqualArrays(["1", "2", "3"], ["1", "2", 3]) // => false