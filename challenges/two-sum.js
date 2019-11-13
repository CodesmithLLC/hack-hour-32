/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {


  /*** Brute force solution - O(n^2) time complexity ***/
  /*
  for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr.length; j++) {
	  if (n - arr[i] - arr[j] === 0) return true;
	}
  }

  return false;
  */

  /*** Hash Table - O(n) time complexity ***/
  const hashTable = {};

  for (let i = 0; i < arr.length; i++) {

	// Calc target minus current element 
	let sumMinusCurrent = n - arr[i];

	// check if this number exists in hash table
	// if so, then there is a two sum solution
	if (hashTable[sumMinusCurrent.toString()]) {
	  return true;
	}

	// add current element to hash table
	hashTable[arr[i]] = arr[i];
  }

  //return false otherwise
  return false;

}

const arr = [1,3,5,7,9];

console.log( twoSum(arr, 10) );
console.log( twoSum(arr, 11) );
console.log( twoSum(arr, 13) );
console.log( twoSum(arr, 16) );

module.exports = twoSum;
