/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array.sort((a,b)=> b - a)
    if (array.length > 2) return (array[0] * array[1] * array[2]);
    if (array.length > 1) return (array[0] * array[0] * array[1]);
    if (array.length === 1) return (array[0] * array[0] * array[0]);
}

module.exports = highestProduct;
