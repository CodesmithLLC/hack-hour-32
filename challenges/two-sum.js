/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    const holding = [];
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            holding.push([arr[i], arr[j]])
        }
    }
    for (let i = 0; i < holding.length; i += 1) {
        if (holding[i][0] + holding[i][1] === n) {
            return true
        }
    }
    return false;
}

console.log(twoSum([1,2,3,8], 6))

module.exports = twoSum;
