/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (Array.isArray(array) === false) {
        return 0;
    } else if (array.length < 3) {
        return 0;
    }
    for (let h = 0; h < array.length; h++) {
        if (typeof array[h] !== 'number') {
            return 'Not a valid array';
        }
    }
    const products = [];
    let highestProd = 0;
    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            for (let k = j + 1; k < array.length; k++) {
                products.push(array[i] * array[j] * array[k]);
            } 
        }
    }
    for (let l = 0; l < products.length; l++) {
        if (highestProd === 0) {
            highestProd = products[l];
        } else if (products[l] > highestProd) {
            highestProd = products[l];
        }
    }
    return highestProd;
}

console.log('Should be 0, actual is >> ', highestProduct([2,1]));
console.log('Should be 0, actual is >> ', highestProduct(5));
console.log('Should be 60, actual is >> ', highestProduct([1, 5, 3, 4, 2]));

module.exports = highestProduct;
