/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  const positiveArr = array.filter( num => num > 0)
  						   .sort( (a,b) => b-a);

  let result = positiveArr[0];
  for (let i = 1; i < 3; i++) {
	result = result * positiveArr[i];
  }

  return result;
  
}

module.exports = highestProduct;
