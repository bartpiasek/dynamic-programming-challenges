// Write a function bestSUm(targetSum numbers) that takes in a 
// targetSum and an array of numbers as arguments.

// The function should return an array containing the shortest
// combinations of numbers that add up to exactly the argetSum

// PL: najkrótsza kombinacja liczb dająca targetSum

const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num ];
            // shortest combination
            // if the combination is shorter than te correct "shortest", update it
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(6, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));