/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */


function binToDec(binary) {
    let pow = binary.length - 1;
    // loop over binary string

    // binary[i] = coefficients
    // list num from 2^0 to 2 ^ binary.length power from left to right
    const powersOf2 = [];
    while (pow >= 0) {
        powersOf2.push(2 ** pow)
        pow -= 1;
    }
    //console.log(`powersof2: `, powersOf2)
    const products = []
    for (let i = binary.length - 1; i >= 0; i--) {
        // 1 0 1 0
        let p = binary[i] * powersOf2[i]
        // console.log(`binary[i]:`, binary[i] * powersOf2[i])
        products.push(p)
    }
    console.log(`products: `, products)
    const sum = products.reduce((acc, val) => acc + val)
    return sum;
}

console.log(binToDec('100')) // 4
console.log(binToDec('11')) // 3
console.log(binToDec('0')) // 0 
console.log(binToDec('101')) // -> 5
console.log(binToDec('0101')) //=> 5

module.exports = binToDec;
