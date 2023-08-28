const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (arr.length > 0) {
    let firstValue = arr[0];
    return firstValue;
  } else {
    return;
  }
};

module.exports = head;