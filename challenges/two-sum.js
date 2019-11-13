/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; i < arr.length; j++){
      if(arr[j] === n - arr[i]){
        return [arr[i], arr[j]]
      }
    }
  }
}

console.log(twoSum([1,5,8,12], 9));

module.exports = twoSum;
