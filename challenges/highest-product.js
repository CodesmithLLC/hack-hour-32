/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    const products = [];
    for (let i = 0; i < array.length; i += 1) {
        for (let j = i + 1; j < array.length; j += 1) {
            products.push(array[i] * array[j]);
        }
    }
    return Math.max(...products);
}


console.log(highestProduct([2, 3, 4, 5, 6, 7]))

module.exports = highestProduct;
