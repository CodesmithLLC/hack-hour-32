/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

 // O(n)^2 time complexity
function twoSum(arr, n) {
    if (arr.length < 2) return false;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[0] + arr[i] === n) return true;
    }
    
    return twoSum(arr.slice(1), n);
}

// console.log(twoSum([0, 1, 2, 3, 4, 5, 6, 7] , 14));

module.exports = twoSum;
