/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time
 *
 */

function mergeArrays(arr1, arr2) {
  const merged = [];
  //while both arrays are not empty
  while(arr1.length!==0 && arr2.length!==0){
    // check the front of each array
    // add the smallest of the two, shift from array
    if(arr1[0]<arr2[0]){
      merged.push(arr1.shift());
      //shift array 1
    }
    else{
      merged.push(arr2.shift());
      // shift array 2
    }

  }
  //check if any arrray has left over value, concat those values to mergerd
  return arr1.length===0 ? merged.concat(arr2) : merged.concat(arr1);
}

module.exports = mergeArrays;
