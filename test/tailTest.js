const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns identical array length to ensure original array has not been modified", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  })
  it("returns element of modified array and verifies it is correct", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"]
    result = tail(words)
    assert.deepEqual(result[0], "Lighthouse");
  })
  it("returns empty array when array of one element is given", () => {
    const oneWordArr = ["Hi"];
    result = tail(oneWordArr);
    assert.deepEqual(result.length, 0);
  })
  it("returns empty array when given an empty array", () => {
    const emptyArr = [];
    result = tail(emptyArr);
    assert.deepEqual(result.length, 0);
  })
});