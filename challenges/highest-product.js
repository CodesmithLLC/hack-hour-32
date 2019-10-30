/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const arrOfLargestNums = [];

  for (let i = 0; i < 3; i += 1) {
    let temp = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] > temp) {
        temp = array[j];
      }
    }
    arrOfLargestNums.push(temp);
    array.splice(array.indexOf(temp), 1);
  }

  console.log(arrOfLargestNums)

  let total = 1;
  for (let i = 0; i < 3; i += 1) {
    total *= arrOfLargestNums[i];
  }

  return total;
}


module.exports = highestProduct;
