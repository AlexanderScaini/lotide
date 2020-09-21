const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return console.log(`✔️ Assertion Passed ${arrayOne} === ${arrayTwo}`);
  } else {
    return console.log(`✖️ Assertion Failed ${arrayOne} !== ${arrayTwo}`);
  }
};

module.exports = assertArraysEqual;