/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) return 0;
    if (Array.isArray(array) === false) return 0;

    let smallestTwoNums = array.sort((a, b) => a > b).slice(0, 3);
    console.log(smallestTwoNums)
    let largestTwoNums = array.sort((a, b) => a < b).slice(0, 3);
    console.log(largestTwoNums)

    if (Math.abs(smallestTwoNums[0] * smallestTwoNums[1]) > Math.abs(largestTwoNums[0] * largestTwoNums[1])) {
        return array[0] * array[1] * array[array.length -1]
    } else {
        return largestTwoNums[0] * largestTwoNums[1] * largestTwoNums[2]
    }
}

// console.log(highestProduct([0, 1, 9, 2, 40, 32, -2, 7, -100, -1001]));

module.exports = highestProduct;
