const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function (arr) {
  let midNum = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return midNum;
  } else if (arr.length % 2 !== 0) {
    midNum.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    midNum.push(arr[Math.floor(arr.length / 2 - 1)])
    midNum.push(arr[Math.floor(arr.length / 2)])
  }
  return midNum;
}

assertArraysEqual(middle([1, 3, 5, 6]), [3, 5]);
assertArraysEqual(middle([1, 3, 5]), [3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);