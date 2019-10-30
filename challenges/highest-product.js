/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 let testArray = [0,2,1,3,4,-7,8,9]

function highestProduct(array) {
// find the 3 biggest numbers 

const sortedArray = array.sort((a,b) => b-a)
console.log(sortedArray)
return sortedArray[0]*sortedArray[1]*sortedArray[2]

}

console.log(highestProduct(testArray))


module.exports = highestProduct;
