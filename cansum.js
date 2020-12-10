// write a function cansum(targetsm, numbers) that takes 
// in a targetsum and an array of numbers as arguemnts.

// The function should return a boolean indicationg
// whether or not it is possible to generate the targetsum 
// using numbers fro the array.

// You may use an element of the array as many times as needed.
//You may assume that all input numbers are nonnegative.

const canSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
         if (canSum(remainder, numbers, memo) === true) {
             memo[targetSum] = true;
             return true;
         }
    }
    memo[targetSum] = false;
    return false;
};


console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));