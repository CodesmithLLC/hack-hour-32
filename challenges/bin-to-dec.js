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

function binToDec(binary, power = 0, num = parseInt(binary[binary.length - 1]), sum = num * Math.pow(2, power)) {
    if (binary.length === 1) return sum;
    return sum + binToDec(binary = binary.slice(0, binary.length - 1), power = power + 1)
}

console.log(binToDec('1101011011'))

module.exports = binToDec;
