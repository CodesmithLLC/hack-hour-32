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
    let split = binary.split('')
    console.log(split)
    split.reverse()
    console.log(split)
    return split.reduce((acc, cur, index) => {
        console.log(index)
        acc = acc + cur*Math.pow(2, index)
        return acc
    }, 0)


    


}

console.log(binToDec('110111'))


module.exports = binToDec;
