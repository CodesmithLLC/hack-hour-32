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
    const binaryArr = binary.split('');
    let decimal = 0;
    for (let i = 0; i < binaryArr.length; i++) {
        decimal += binaryArr[i] * (2**(binaryArr.length-i-1))
    }
    return decimal;
}


console.log(binToDec('1000'));

module.exports = binToDec;
