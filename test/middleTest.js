const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns middle two elements when given an even number of elements in the array", () => {
    assert.deepEqual(middle([1, 3, 5, 6]), [3, 5]);
  })
  it("returns middle element when given an odd number of elements in an array", () => {
    assert.deepEqual(middle([1, 3, 5]), [3]);
  })
  it("returns an empty array when given an array with one element", () => {
    assert.deepEqual(middle([1, 3, 5]), [3]);
  })
  it("returns an empty array when given an empty array", () => {
    assert.deepEqual(middle([]), []);
  })
});