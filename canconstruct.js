// Write a function canConstruct(target, wordBank) that accepts
// a target string and an aray of strings.

// The funcion should return a boolean indicating whether or onot the
// target can be constructed by concatenating elements of the 'wordBank' array

// You ma reuse elements of 'wordBank' as many times as needed.

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") {
    return true;
  }

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska"]));
