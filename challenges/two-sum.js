/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!Array.isArray(arr) || arr.length === 1) return false;

  const need = {};

  for (const num of arr) {
    if (need.hasOwnProperty(num)) return true;
    const needNum = n - num;
    need[needNum] = needNum;
  }
  return false;
}

// console.log(twoSum([1,5,4,7,3,4,6], 13));
// console.log(twoSum([1,5,4,7,3,4,6], 2));

module.exports = twoSum;
