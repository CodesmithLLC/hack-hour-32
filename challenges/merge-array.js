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
    const obj = {};
    const newArr = arr1.concat(arr2);
    // console.log(newArr)
    for (let i=0; i<newArr.length; i++){
        obj[newArr[i]] = i;
    }
    const keys = Object.keys(obj)
    let result = []
    for(let j=0; j<keys.length; j++){
        result.push(Number(keys[j]))
    }
    // console.log(result)
    // console.log(obj)
    // console.log(keys)
}
// function merArrays(arr1, arr2){
//     const newArr = arr1.concat(arr2);
//     for(let i = 0)
// }
console.log(mergeArrays([3,4,6,10,11,15,21],[1,5,8,12,14,19]))
module.exports = mergeArrays;
