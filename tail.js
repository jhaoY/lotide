const tail = function(arr) {
  if (arr.length > 0) {
    let tailValue = arr.slice(1);
    return tailValue;
  } else {
    return arr;
  }
};

module.exports = tail;