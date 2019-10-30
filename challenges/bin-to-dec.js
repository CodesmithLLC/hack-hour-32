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
    //reverse the string and then increment normally?
    let split = binary.split('');
    let reverseArray = split.reverse();
    var joinedArray = reverseArray.join("");
    let sum = 0;
    for (let i = 0; i < joinedArray.length; i++) {
        if (joinedArray[i] === '1') {
            sum += 1 * Math.pow(2, i);
        }
    }
    return sum;
}


module.exports = binToDec;
