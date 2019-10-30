/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length < 3 || !Array.isArray(array)) return 0;
  let sortedArr = array.sort((a, b) => a - b);
  console.log(sortedArr); 
  return Math.max(array[array.length - 1] * array[array.length - 2] * array[array.length - 3], array[0] * array[1] * array[array.length - 1]);
}

// console.log(highestProduct([4, 76, 100, 25, 10, 3])); // 190000
let posNegArr = [-1, -2, 6, -7, -3, -3213, -500,];  
console.log(highestProduct(posNegArr));


module.exports = highestProduct;
