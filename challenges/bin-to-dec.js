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
  // split string into array [0,1,0,1] and reverse [1,0,1,0]
  // loop through array, multiple number by index * power(0/index) and add to sum
  binary = binary.split('').reverse();
  let sum = 0;
  // console.log(binary);
  for (let i = 0; i < binary.length; i += 1) {
    const num = binary[i] * Math.pow(2, i);
    sum += num;
  }
  return sum;
}

module.exports = binToDec;

console.log(binToDec('0101'))