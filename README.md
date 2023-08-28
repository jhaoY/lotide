# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jyhao/lotide`

**Require it:**

`const _ = require('@jyhao/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns element at index 0
* `tail(array)`: Returns a new array with element at index 0 removed
* `middle(array)`: Returns elements from the middle of a given array
* `countLetters(string)`: Returns an object that counts the number of letters for each letter.
* `countOnly(array, object)`: Returns an object which counts how many times a given value appears
* `findKey(object, callback)`: Returns an object which looks through an object given a function
* `findKeyByValue(object, value)`: Returns a key which matches the value given
* `letterPositions(string)`: Returns an object which contains the position of each letter
* `map(array, callback)`: Returns a new array given a function
* `takeUntil(array, callback)`: Loops through an array given a function to stop, then returns it
* `without(array1, array2)`: Removes all values in array2 from array1 then returns it