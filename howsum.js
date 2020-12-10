// write a function hwosum(targetSum, numbers) that takes in a 
// targetSum and an array of numbers as arguments.

// the function should return an array containing any combinations
// of elements that add up to exactly the targetSum. if there is no
// combination that adds up to the targetsum, then return null.

// if there are multiple combinations possible, you may return any single one.

const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult !== null) {
            return [ ...remainderResult, num ];
        }
    }
    return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));