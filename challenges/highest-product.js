/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let sorted = array.sort((a, b) => Math.abs(b)- Math.abs(a))
    console.log(sorted)
    if (sorted.length === 3) {
        console.log('length is 3')
        return sorted.reduce((acc, cur) => acc * cur)
    }
    if (sorted[0]*sorted[1]*sorted[2] > sorted[1]*sorted[2]*sorted[3]) {
        return sorted[0]*sorted[1]*sorted[2]
    } else {
        console.log('next one is biger')
        newArray = sorted.slice(1)
        console.log(newArray)
        return highestProduct(newArray)
    }


}


console.log(highestProduct([-2,-6,-5,2, 3, -7, -8]))

module.exports = highestProduct;
