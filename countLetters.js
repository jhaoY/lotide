const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  let results = {};
  // convert all letters to lowercase to ensure we don't see Upper and Lower in the result
  sentence = sentence.toLowerCase();
  for (letter of sentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
}

console.log(countLetters('LHL'));
console.log(countLetters('hahahaHAHAAAAAAA'));
console.log(countLetters('wow this is a sentence! I love it!'));