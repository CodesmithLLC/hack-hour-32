/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    let result = 0;
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if (arr[i]+arr[j]===n) {
                return true;       
        }else {
            return false
        }
    }
}
console.log(twoSum([1,2,3,4,8,100,45,28],48))
module.exports = twoSum;
