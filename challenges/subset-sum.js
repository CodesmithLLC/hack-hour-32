/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  arr = array.filter((x) => (x <= target));
  let combi = [];
  let temp= 0;
  let letLen = Math.pow(2, arr.length);
  
  for (let i = 0; i < letLen ; i += 1){
      temp= 0;
      for (let j = 0; j < arr.length; j += 1) {
          if ((i & Math.pow(2,j))){ 
              temp += arr[j]
          }
      }
      if (temp !== 0) {
          combi.push(temp);
      }
  }
  
  for (let i = 0; i < combi.length; i += 1) {
    if (combi[i] === target) {
      return true;
    }
  }
  
  return false;
}

module.exports = subsetSum;
