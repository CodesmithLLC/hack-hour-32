/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    const cache = {};
    for (let i = 0; i < arr.length; i ++) {
        if (cache.hasOwnProperty(arr[i])) {
            return true;
        } else {
            cache[n - arr[i]] = true;
        }
    }
    return false;
}


module.exports = twoSum;
