/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {


    if (array.length === 3) {
        return array.reduce((p, n) => p * n)
    }

    // sort array
    const sorted = array.sort((a, b) => a - b)
    console.log(sorted)

    return sorted[array.length - 1] * sorted[array.length - 2] * sorted[array.length - 3]

}


// const n = [-50, 10, 3] // -1500
// console.log(highestProduct(n))

// const t = [-1, 2, 4, 9]
// console.log(highestProduct(t)) // 72

// const a = [0, 2, 1, 4, 8] // 2/4/8 = 64

// console.log(highestProduct(a))

// const b = [2, 14, 3, 10, 20] // 10/20/14 = 2800
// console.log(highestProduct(b))

// const c = [-12, 50, 100, 10, 8, 4]
// console.log(highestProduct(c)) // 50000

module.exports = highestProduct;
