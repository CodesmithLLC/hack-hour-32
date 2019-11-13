/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const hashMap = {};
  for (let i = 0; i < arr.length; i += 1) {
    let complement = n - arr[i];
    if (hashMap[complement]) {
      return true;
    }
    hashMap[arr[i]] = i;
  }
  return false;
}

module.exports = twoSum;
