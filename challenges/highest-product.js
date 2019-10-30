/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let new_arr =array.sort();
    let product = 1;
    for(let i = array.length-1;i>array.length -3;i--){
      product *= array[i];
    }
    return product;
}


module.exports = highestProduct;
