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
    let newStr = binary.split('').reverse().join('');
    let answer = 0
    let binArr = [1, 2, 4, 8, 16, 32, 64, 128]
    for(let i = 0; i < newStr.length; i++){
        if(newStr[i] === '1'){
            answer = answer + binArr[i]
        }
    }
    return answer
}
console.log(binToDec('11111111'))
module.exports = binToDec;
