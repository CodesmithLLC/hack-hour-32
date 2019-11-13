/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

  for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr.length; j++) {
	  if (n - arr[i] - arr[j] === 0) return true;
	}
  }

  return false;
}

  /* TEST 
const arr = [1,3,5,7,9];

console.log( twoSum(arr, 10) );
console.log( twoSum(arr, 11) );
console.log( twoSum(arr, 13) );
console.log( twoSum(arr, 16) );
  */

module.exports = twoSum;
