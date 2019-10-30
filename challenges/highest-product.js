/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const tempArray = array.sort((a, b) => a - b);
  console.log(tempArray);

  let product = 1;

  for (let i = tempArray.length - 1; i > tempArray.length - 1 - 3; i--) {
    product *= tempArray[i];
  }
  return product;
}

console.log(highestProduct([5, 10, 2, 19, 1, 11]));

module.exports = highestProduct;
