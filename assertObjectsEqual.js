const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log(`✔️ Assertion Passed: ${actual}  === ${expected}`);
    return true
  } else {
    // console.log(`✖️ Assertion Failed: ${actual} !== ${expected}`);
    return false
  }
};

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (!assertEqual(firstArray[i], secondArray[i])) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objectKeys = Object.keys(object1);
  if (!(Object.keys(object1).length === Object.keys(object2).length)) {
    return false;
  }
  for (const key of objectKeys) {
    if (Array.isArray(object1[key]) && object1[key].length === object2[key].length) {
      for (let i = 0; i < object1[key].length; i++) {
      eqArrays(object1[key][i], object2[key][i])
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    return console.log(`✔️ Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`);
  } else {
    return console.log(`✖️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false
assertObjectsEqual(ab, abc);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true
assertObjectsEqual(cd, dc);
const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
assertObjectsEqual(cd, cd2)

module.exports = assertObjectsEqual;