/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    /* Brute force */

    // const results = [];
    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = 1; j < arr.length; j++) {
    //         results.push(arr[i] + arr[j])
    //     }
    // }
    // return results.includes(n) ? true : false;

    /* difference */


    const diff = [];
    for (let i = 0; i < arr.length; i++) {
        diff.push(n - arr[i]); // push differences into diff
    }
    //console.log(`diff`, diff)

    let i = 0, count = 0; // count num of elements that adds up to n
    while (i < diff.length) {
        if (arr.includes(diff[i])) count++; // increment count if arr includes diff
        i += 1;
    }
    //console.log(`count`, count)
    return count === 2; // count should === 2 if there are 2 elements that sum up to n
}
// console.log(twoSum([1, 2, 3], 5)) // true
// console.log(twoSum([0, 2], 2)) // true
// console.log(twoSum([1, 2, 3, 10], 12)) // true
// console.log(twoSum([1, 2, 3], -1)) // false
module.exports = twoSum;
