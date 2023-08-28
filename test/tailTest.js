const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case: Verify the original array has not been modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// Test Case: Verify elements of modified array are correct
let result = tail(words);
assertEqual(result[0], "Lighthouse");

// Test Case: Verify array with one element returns an empty array
const oneWordArr = ["Hi"];
result = tail(oneWordArr);
assertEqual(result.length, 0);

//Test Case: Verify empty array returns an empty array
const emptyArr = [];
result = tail(emptyArr);
assertEqual(result.length, 0);