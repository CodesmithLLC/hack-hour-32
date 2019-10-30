/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length < 3) return;
  let ar = array.sort((a,b) => a - b);
  return Math.max(ar[ar.length-1] * ar[ar.length-2] * ar[ar.length-3], ar[ar.length-1] * ar[0] * ar[1]);
}

module.exports = highestProduct;
