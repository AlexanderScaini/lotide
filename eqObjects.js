const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const objectKeys = Object.keys(object1);
  if (!(Object.keys(object1).length === Object.keys(object2).length)) {
    return false;
  }
  for (const key of objectKeys) {
    if (Array.isArray(object1[key]) && object1[key].length === object2[key].length) {
      for (let i = 0; i < object1[key].length; i++) {
        eqArrays(object1[key][i], object2[key][i]);
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;