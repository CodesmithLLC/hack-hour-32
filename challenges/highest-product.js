/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

const arr = [1,2,3,4,5,10]

function highestProduct(array) {
  if (array.length > 3) {
    array.sort((a,b) => b - a);    
    return array[0] * array[1] * array[2]
  }
  return undefined;
}
console.log(highestProduct(arr))


module.exports = highestProduct;
