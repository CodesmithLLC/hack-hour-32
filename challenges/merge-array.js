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
  if (!Array.isArray(arr1)) return arr2;
  if (!Array.isArray(arr2)) return arr1;

  const storage = [];

  if (arr1.length > arr2.length) {
    for (let i = 0; i < arr1.length; i += 1) {
      
    }
  }

}

module.exports = mergeArrays;
