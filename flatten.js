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
    return console.log(`✔️ Assertion Passed`);
  } else {
    return console.log(`✖️ Assertion Failed`);
  }
};

const flatten = function(bigOlHonkenArray) {
  let shinyNewArray = [];
  for (let i = 0; i < bigOlHonkenArray.length; i++) {
    if (Array.isArray(bigOlHonkenArray[i])) {
      for (let j = 0; j < bigOlHonkenArray[i].length; j++) {
        shinyNewArray.push(bigOlHonkenArray[i][j]);
      }
    } else {
      shinyNewArray.push(bigOlHonkenArray[i]);
    }
  }
  return console.log(shinyNewArray);
};