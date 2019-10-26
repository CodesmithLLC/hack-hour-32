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
    let tick = 2 ** (binary.length - 1);
    let output = 0;
    for(let i = 0; i < binary.length; i++){
        if(binary[i] === '0') output += 0
        else if(binary[i] === '1') output += tick;
        tick = tick === 1 ? 0 : tick /= 2;
    }
    return output;
}

module.exports = binToDec;
