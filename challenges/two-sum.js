/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

 // brute force way
function twoSum(arr, n) {
  for(let i = 0; i < arr.length; i ++) {
    for(let j = 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

// hashing way
function twoSum(arr, n) {
  const hash = {};
  for(let i = 0; i < arr.length; i++) {
    if(hash.hasOwnProperty(arr[i])) return true;
    else {
      const complimentNum = n - arr[i];
      hash[complimentNum] = i;
    }
  } 
  return false;

}

// test!
const arr = [2, 7, 11, 15];
console.log(twoSum(arr, 9)); // return true
 
module.exports = twoSum;
