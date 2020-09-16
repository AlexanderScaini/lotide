const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`✖️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objectToSearchThrough, valueToSearchWith) {
  const values = Object.values(objectToSearchThrough);
  const keys = Object.keys(objectToSearchThrough);
  for (let i = 0; i < values.length; i++) {
    if (values[i] === valueToSearchWith) {
      return keys[i];
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
