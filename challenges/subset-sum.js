/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target,i=0) {
    let count = 0;
    const sorted = array.sort((a,b)=> a-b)
    console.log(sorted)
    for (let i=0; i<sorted.length; i++){
        if (sorted[i] <= target && count <=target){
            // target = target - sorted[i];
            count += sorted[i]
        }else if (sorted[i] > target){
            continue;
        }
    }
    // return target
    // for (let i=0; i<array.length; i++){
    //     if (array[i] <= target){
    //         target = target - array[i];
    //     }else if (array[i] > target){
    //         continue;
    //     }
    // }
    // return target
}
console.log(subsetSum([3, 7, 4, 2], 5))
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))
console.log(subsetSum([8, 2, 4, 12], 13))
console.log(subsetSum([8, -2, 1, -3], 6))
module.exports = subsetSum;
