/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) return 0;
    if (Array.isArray(array) !== true) return 0;
    const products = [];
    for (let i = 0; i < array.length; i += 1) {
        for (let j = i + 1; j < array.length; j += 1) {
            for (let k = j + 1; k < array.length; k += 1) {
                products.push(array[i] * array[j] * array[k]);
            }
        }
    }
    console.log(products)
    return Math.max(...products);
}


console.log(highestProduct([-2, -3, 4, 10, -8, 5]))

module.exports = highestProduct;
