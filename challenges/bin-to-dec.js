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



// function binToDec(binary, i=0, count=0) {
function binToDec(binary, count=0) {
    // if (i === binary.length) return count;
    if (!binary.length) return count;

    // return binary[i] * Math.pow(2,binary.length-1) + binToDec(binary, i+=1, )
    
    return count = binary[0] * Math.pow(2,binary.length-1) + binToDec(binary.substring(1))
}
console.log(binToDec('0'))
console.log(binToDec('11'))
console.log(binToDec('100'))
console.log(binToDec('101'))
console.log(binToDec('0101'))
module.exports = binToDec;
