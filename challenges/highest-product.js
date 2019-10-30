/**
 * Given an array of integers, find the highest product you can get
 * from three of the integers.
 */

function highestProduct(array) {
  let sortedArr = array.sort(compareNumbers);
  let highestNum = sortedArr.splice(sortedArr.length - 3, 3);
  return highestNum.reduce((acc, val) => acc * val);
}

function compareNumbers(a, b) {
  return a - b;
}

console.log(highestProduct([3, 9, 17, 8, 2, 0, 1, -1, -11]));
module.exports = highestProduct;
