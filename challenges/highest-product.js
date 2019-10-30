/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) return 0;
    if (Array.isArray(array) === false) return 0;

    const smallestTwoNums = array.sort((a, b) => a > b).slice(0, 2);
    const largestThreeNums = array.sort((a, b) => a < b).slice(0, 3);

    const accountingNegNums = smallestTwoNums[0] * smallestTwoNums[1] * largestThreeNums[0];
    const largestPosNums = largestThreeNums[0] * largestThreeNums[1] * largestThreeNums[2];

    return Math.max(accountingNegNums, largestPosNums);

    // if (Math.abs(smallestTwoNums[0] * smallestTwoNums[1]) > largestThreeNums[0] * largestThreeNums[1]) {
    //     return smallestTwoNums[0] * smallestTwoNums[1] * largestThreeNums[0]
    // } else {
    //     return largestThreeNums[0] * largestThreeNums[1] * largestThreeNums[2]
    // }
}

console.log(highestProduct([0, 1, 9, 2, 40, 32, -2, 7, -100, -1001]));

module.exports = highestProduct;
