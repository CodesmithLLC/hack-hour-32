/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  	const length = array.length;
	array.sort();
  	return array[length - 1] * array[length - 2] * array[length - 3];
}


module.exports = highestProduct;
