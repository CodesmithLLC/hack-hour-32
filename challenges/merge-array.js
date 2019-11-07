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
    // console.log(`result: `,arr1.concat(arr2).sort((a, b) => a - b))
    // return arr1.concat(arr2).sort((a, b) => a - b)
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
    if (arr1.length === 0 && arr2.length === 0) return [];


    let i1 = 0, i2 = 0, curr = 0, res = [];
    while (curr < (arr1.length + arr2.length)) {
        let arr1Empty = i1 >= arr1.length;
        let arr2Empty = i2 >= arr2.length;

        let e1 = arr1[i1], e2 = arr2[i2];
        //console.log(`e1 and e2`, e1, e2);
        if (!arr1Empty && (arr2Empty || (e1 < e2))) {
            res[curr] = e1;
            i1 += 1;
        }
        else {
            res[curr] = e2;
            i2 += 1;
        }
        curr += 1;
    }
    return res;
}
// var a1 = [3, 4, 6, 10, 11, 15, 21];
// var a2 = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(a1, a2) === [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21])

module.exports = mergeArrays;
