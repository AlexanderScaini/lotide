const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`✔️ Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`);
  } else {
    return console.log(`✖️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // assertEqual(eqObjects(ab, ba), true); // => true
// assertObjectsEqual(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// // assertEqual(eqObjects(ab, abc), false); // => false
// assertObjectsEqual(ab, abc);
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// // assertEqual(eqObjects(cd, dc), true); // => true
// assertObjectsEqual(cd, dc);
// const cd2 = { c: "1", d: ["2", 3, 4] };
// // assertEqual(eqObjects(cd, cd2), false); // => false
// assertObjectsEqual(cd, cd2)

module.exports = assertObjectsEqual;