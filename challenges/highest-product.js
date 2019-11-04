/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length === 3) return array.reduce((acc, curr) => acc * curr);

  const positives = array.filter(num => num >= 0).sort((a, b) => a - b);
  const negatives = array.filter(num => num < 0).sort((a, b) => a - b);

  console.log(positives);
  console.log(negatives);

  if (negatives.length === 1) return positives.reduce((acc, curr) => acc * curr);
  if (positives.length === 1) return positives[0] * negatives[0] * negatives[1];
  if (positives.length > 1 && negatives.length > 1) {
    if (positives.length === 2) return positives[1] * negatives[0] * negatives[1];
    if (positives.length > 2) return Math.max((positives[positives.length - 1] * positives[positives.length - 2] * positives[positives.length - 3]), (positives[positives.length - 1] * negatives[0] * negatives[1]));
  }

  // if (positives.length >= 3) {
    
  // }

  // const largestInts = [];
  // while (largestInts.length < 3) {
  //   const largest = Math.max(...array);
  //   const i = array.indexOf(largest);
  //   largestInts.push(largest);
  //   array.splice(i, 1);
  // }
  // return largestInts.reduce((acc, curr) => acc * curr)
}

console.log(highestProduct([6,3,4,1,2,5]));
console.log(highestProduct([-4,-10,-1,1]));

module.exports = highestProduct;
