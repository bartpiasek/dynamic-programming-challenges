// Write a function that takes in a number as an argument.
// The function should return the n-th number of the fibonacci sequence.

// The 1st and 2nd num of the sequence is 1.
// To genererate the next number of the sequence,we sum prev two.

// memoization - store duplicate fib(5) value
// js object, keys will be arg to fn, value will be the return value
const fibmemo = (num, memo = {}) => {
    if (num in memo) return memo[num];
    if (num <= 2) return 1;
    memo[num] = fibmemo(num - 1, memo) + fibmemo(num - 2, memo);
    return memo[num];
};

console.log(fibmemo(6));
console.log(fibmemo(7));
console.log(fibmemo(8));
console.log(fibmemo(50));