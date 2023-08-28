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

module.exports = middle;