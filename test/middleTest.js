const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 3, 5, 6]), [3, 5]);
assertArraysEqual(middle([1, 3, 5]), [3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);