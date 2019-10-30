/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    sortedArr = array.sort((a, b) => a - b);
    let len = array.length;
    let maxProduct = sortedArr[len-1] * sortedArr[len-2] * sortedArr[len-3];
    return maxProduct;
    }

module.exports = highestProduct;
