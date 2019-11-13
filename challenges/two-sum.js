/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let possibilities = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) possibilities.push(arr[i]);
  }
  if (possibilities.length === 0) return false;
  for (let i = 0; i < possibilities.length; i++) {
    for (let j = i + 1; j < possibilities.length; j++) {
      if (possibilities[i] + possibilities[j] === n) return true;
    }
  }
  return false;
}
module.exports = twoSum;
