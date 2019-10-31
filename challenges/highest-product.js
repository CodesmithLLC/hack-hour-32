/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
// Fellow Approach
// // O(nlogn) time, O(n) space
// function highestProduct(array) {
//     // check if input is not an array
//     if(!Array.isArray(array)) return 0;
//     // check is there is less than 3 elements in the array
//     if(array.length < 3) return 0;
//     //sort array by desc order
//     const sorted = array.sort((a,b) => a-b);
//     // get product of the lowest two elements, in case they are negative
//     const lowestTwo = sorted.slice(0,2).reduce((a,b) => a*b);
//     // get product 2nd and 3rd largest elements
//     const secAndThird = sorted.slice(sorted.length - 3, sorted.length-1).reduce((a,b) => a*b);
//     // get largest element
//     const highest = sorted[sorted.length-1];
//     // compare the two, return product of top 3
//     return secAndThird > lowestTwo ? highest * secAndThird : highest * lowestTwo;
// }

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

// console.log(highestProduct([0, 1, 9, 2, 40, 32, -2, 7, -100, -1001]));

module.exports = highestProduct;
