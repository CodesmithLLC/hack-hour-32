/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const tempArray = array.sort((a, b) => a - b);
  console.log(tempArray);

  let product1 = 1;
  let product2 = 1;
  if (tempArray[0] < 0 && tempArray[1] < 0)
    product1 = tempArray[0] * tempArray[1] * tempArray[tempArray.length - 1];

  for (let i = tempArray.length - 1; i > tempArray.length - 1 - 3; i--) {
    product2 *= tempArray[i];
  }

  if (product1 > product2) return product1;

  return product2;
}

console.log(highestProduct([5, 10, 2, 19, 1, 11]));
console.log(highestProduct([5, 10, -2, 19, -1, 11]));
console.log(highestProduct([0, -2, 1, -1, 11]));

module.exports = highestProduct;
