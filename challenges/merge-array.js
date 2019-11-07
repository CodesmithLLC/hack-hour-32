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
  if(!Array.isArray(arr1) && !Array.isArray(arr2)) return [];
  if(!Array.isArray(arr1)) return arr2;
  if(!Array.isArray(arr2)) return arr1;
  let count1 = 0;
  let count2 = 0;
  let returnArr = [];
  while(count1 !== arr1.length || count2 !==arr2.length){
    if(count1 === arr1.length){
      returnArr.push(arr2[count2]);
      count2 += 1;
    }
    else if(count2 === arr2.length){
      returnArr.push(arr1[count1]);
      count1 += 1;
    }
    else {
      if(arr1[count1]>arr2[count2]){
        returnArr.push(arr2[count2]);
        count2 += 1;
      }
      else{
        returnArr.push(arr1[count1]);
        count1 += 1;
      }
    }
  }
  return returnArr;
}

module.exports = mergeArrays;
