/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */


// FIND ALL POSSIBLE SUBSETS WITH HELPER FUNCTION
function combos(arr, minLength = 2) {
    function inner(n, sourceArray, got, subsets) {
        console.log(`n:`, n, `sourceArray: `, sourceArray, `got: `, got, `subsets:`, subsets)
        if (n === 0) {
            if (got.length > 0) {
                subsets[subsets.length] = got;
            }
            return;
        }
        for (let i = 0; i < sourceArray.length; i++) {
            inner(n - 1, sourceArray.slice(i + 1), got.concat([sourceArray[i]]), subsets);
        }
        return;
    }

    let subsets = [];
    for (let j = minLength; j < arr.length; j++) {
        inner(j, arr, [], subsets);
    }
    subsets.push(arr);
    return subsets;

}


function subsetSum(array, target) {
    const subArrays = combos(array);
    //console.log(subArrays)
    // find subsets possible subsets
    // iterate over sums to check if subArrays elements sum up to target
    const sums = [];
    for (let i = 0; i < subArrays.length; i++) {
        let sub = subArrays[i]
        let sum = sub.reduce((acc, val) => acc + val);
        sums.push(sum)
    }
    return sums.includes(target)
}

console.log(combos([3, 7, 4, 2]))
//console.log(subsetSum([3, 7, 4, 2], 5)) // true
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // true
// console.log(subsetSum([8, 2, 4, 12], 13)) // F
// console.log(subsetSum([8, -2, 1, -3], 6)) // T

module.exports = subsetSum;
