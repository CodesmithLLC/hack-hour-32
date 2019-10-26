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
    // binary numbers are just base 2 instead of base 10
    // each digits place is +1 to the exponent on base 2 (2^0, 2^1, 2^2, and on)
    // 100 -> 1x2x2 + 0x2 + 0x1 = 4

    // first remove any heading 0's from beginning of string
    const frontZeroesRemoved = binary.replace(/^0+/, '');
    let number = 0;

    let i = 0;
    let exponent = frontZeroesRemoved.length - 1;
    
    // future refactoring: work right to left; check the curVal, if there's a 1, multiply it by 2 ^ power of the index
    while (i < frontZeroesRemoved.length) {
        number += frontZeroesRemoved[i] * (2 ** exponent);
        i++;
        exponent--;
    }

    // let arr = [...frontZeroesRemoved];

    // const number = arr.reduceRight((acc, curVal) => {
    //     acc * (2 ** )   
    // })

    return number;
}



module.exports = binToDec;

console.log(binToDec('0101')); // return 5
console.log(binToDec('1111')); // return 15
