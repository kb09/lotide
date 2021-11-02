# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install kb09/lotide`

**Require it:**

`const _ = require('kb09/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns the first element of an array
* `function2(tail)`: returns every element except the first element of an array
* `function3(middle)`: returns the middle element of an array
* `function4(assertArraysEqual)`: asserts if two arrays are equals
* `function5(assertEqual)`: asserts if two values are equals
* `function6(eqArrays)`: compares two arrays
* `function7(assertObjectsEqual)`: asserts if two objects are equals
* `function8(countLetters)`: returns counts of each letter of a string
* `function9(countOnly)`: takes items and returns counts for a subset of those items
* `function10(eqObjects)`: compares two objects
* `function11(findKey)`: scans object and returns the first key for which the callback is truthy
* `function12(findKeyByValue)`: searches a key on an object where its value matches the value given
* `function13(flatten)`: returns a single array from an array of arrays 
* `function14(letterPositions)`: returns the indices in the string where each character is found
* `function15(map)`: creates a new array from calling a given function on every element in the calling array
* `function16(takeUntil)`: returns data from an array until callback functions is false
* `function17(without)`: removes specific elements from an array

