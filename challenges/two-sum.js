/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const matches = new Set ([]);
  for (let i = 0; i < arr.length; i++) {
    if (matches.has(arr[i])) return true;
    matches.add(n-arr[i]);
  }
  return false;
}

console.log(twoSum([1, 2, 4, 6], 5))
console.log(twoSum([1, 2, 4, 6], 9))
console.log(twoSum([1, -2, 4, 6], 2))

module.exports = twoSum;
