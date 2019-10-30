/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  if (array.length < 3) return 0;

  let negatives = array.filter( num => num < 0);
  let newArr = array.sort( (a,b) => b-a);

  if (negatives % 2 === 0) {
	negatives = negatives.sort( (a,b) => b-a);
	newArr.push(negatives[0])
	newArr.push(negatives[1])
  }

  newArr = newArr.sort( (a,b) => b-a);


  let result1 = newArr[0];
  for (let i = 1; i < 3; i++) {
	result1 = result1 * newArr[i];
  }

  let result2 = newArr[newArr.length-1];
  for (let i = 1; i < 3; i++) {
	result2 = result2 * newArr[newArr.length-1-i];
  }

  if (result1 > result2) return result1;
  return result2;
  
}

//const myArr = [1,-2,-3, 1];

//console.log(highestProduct(myArr));

module.exports = highestProduct;
