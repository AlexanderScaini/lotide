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
}


const middle = function(array) {
  let theMiddle = array.length / 2;
  let evenOrOdd = 0
  // console.log(array.length)
  if (array.length <= 2) {
    return console.log([]);
  }
  const howMany = function(number) {
    if (number % 1 === 0) {
      // console.log("even");
      theMiddle -= 1
      return number + 1
    } else {
      // console.log("odd");
      return number + 1
    }
  }
  evenOrOdd = howMany(theMiddle);
  // console.log(Math.floor(theMiddle));  
  return console.log(array.slice(Math.floor(theMiddle), evenOrOdd));
}

middle([1, 2, 3])
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// middle([1]) // => []
// middle([1, 2]) // => []
