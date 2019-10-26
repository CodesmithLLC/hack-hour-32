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
    if(binary.length ===0) return;
    let twos = 1;
    let returnNumb = 0;
    for(let i = binary.length - 1; i >= 0; i--){
        returnNumb += twos * parseInt(binary[i]);
        twos *= 2;
    }
    return returnNumb;
}

module.exports = binToDec;
