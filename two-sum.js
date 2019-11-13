/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    for(let i = 0; i < arr.length; i++){
        for(let x = 0; x < arr.length; x++){
            if(arr[i]+arr[x]===n){
                return true
            } else {
                if(i === arr.length && x === arr.length){
                    return false
                }
            }
        }
    }
}
console.log(twoSum([1,5,4,6,3,4], 10))
module.exports = twoSum;