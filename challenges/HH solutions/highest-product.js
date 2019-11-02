/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// O(nlogn) time, O(n) space
function highestProduct(array) {
  // check if input is not an array
  if(!Array.isArray(array)) return 0;
  // check is there is less than 3 elements in the array
  if(array.length < 3) return 0;
  //sort array by desc order
  const sorted = array.sort((a,b) => a-b);
  // get product of the lowest two elements, in case they are negative
  const lowestTwo = sorted.slice(0,2).reduce((a,b) => a*b);
  // get product 2nd and 3rd largest elements
  const secAndThird = sorted.slice(sorted.length - 3, sorted.length-1).reduce((a,b) => a*b);
  // get largest element
  const highest = sorted[sorted.length-1];
  // compare the two, return product of top 3
  return secAndThird > lowestTwo ? highest * secAndThird : highest * lowestTwo;
}

module.exports = highestProduct;
