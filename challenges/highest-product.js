/**
 * Given an array of integers, find the highest product you can get
 * from three of the integers.
 */

function highestProduct(array) {
  let sortedArr = array.sort(compareNumbers);
  let highestNum = sortedArr.splice(sortedArr.length - 3, 3);
  if (array.length < 3) return 0;
  if (!Array.isArray(array)) return 0;
  if (
    sortedArr[0] * sortedArr[1] > highestNum[0] * highestNum[1] ||
    sortedArr[0] * sortedArr[1] > highestNum[1] * highestNum[2]
  )
    return sortedArr[0] * sortedArr[1] * highestNum[2];
  else return highestNum.reduce((acc, val) => acc * val);
}

function compareNumbers(a, b) {
  return a - b;
}

// console.log(highestProduct([3, 9, 17, 8, 2, 0, 1, 11, -17]));
module.exports = highestProduct;
