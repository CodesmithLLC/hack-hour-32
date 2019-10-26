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

 // length - i			5 - 3 = 2
 // length: 5			01011
 // i = 3				   ^


function binToDec(binary) {
	let length = binary.length
  let sum = 0;

  for(let i = 0; i < length - 1; i += 1) {
    if (binary[i] === '1') {
      sum += Math.pow(2, length - 1 - i)
    }
  }
  if (binary[length - 1] === '1') {
    sum += 1;
  }

  return sum;
}

module.exports = binToDec;
