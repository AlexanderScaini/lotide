# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alexander.scaini/lotide`

**Require it:**

`const _ = require('@alexander.scaini/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrayOne, arrayTwo)`: Returns a console.log whether an array is exactly the same as another array.
* `assertEqual(actual, expected)`: Returns a console.log whether a value is exactly the same as another value.
* `assertObjectsEqual(actual, expected)`: Returns a console.log whether an object is exactly the same as another object.
* `countLetters(inputString)`: Returns an object with the count of each unique letter in the string.
* `countOnly(allItems, itemsToCount)`: Returns an object with the count of how many times each of the itemsToCount was found in the allItems list.
* `eqArrays(firstArray, secondArray)`: Returns a boolean whether an array is exactly the same as another array.
* `eqObjects(object1, object2)`: Returns a boolean whether an object is exactly the same as another object.
* `findKey(object, callback)`: Returns the first key in the object that matches the callback search.
* `findKeyByValue (objectToSearchThrough, valueToSearchWith)`: Returns the key of the objectToSeachThrough that matches the valueToSeachWith
* `flatten(array)`: Returns a new array with all of the values in an array and its nested arrays (only 1 level of nesting)
* `head(array)`: Returns the first entry in an array as a new array
* `letterPositions(sentence)`: Returns an object with each unique letter in the sentence as the key and the positions of that letter in the sentence as an array of values.
* `map(array, callback)`: Returns an array of values based on the callback function.
* `middle(array)`: Returns the middle indexed item from the input array into a new array. It will return the two middle items of the array is an even number of items. It will return an empty array if the array has less than three values.
* `tail(array)`: Returns a new array without the first entry in the input array.
* `takeUntil(array, callback)`: Returns a new array with the values of the original array until a point specified by the callback function is reached.
* `without(sourceArray, itemsToRemove)`: Returns a new array without the values listed in the itemsToRemove array.