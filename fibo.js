// Write a function that takes in a number as an argument.
// The function should return the n-th number of the fibonacci sequence.

// The 1st and 2nd num of the sequence is 1.
// To genererate the next number of the sequence,we sum prev two.

// normal fibo function
const fib = (num) => {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));


