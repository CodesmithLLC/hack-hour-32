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
  let multiplier = 1;
  let result = 0;
  let temp = binary;

  console.log(binary);
  console.log(binary.length);
  console.log(typeof binary);

  for (let i = 0; i < binary.length; i++) {
    // Get the rightmost binary
    const check = temp % 10;
    // console.log(check);

    if (Number(check) === 1) result += Number(check) * multiplier;
    // console.log(typeof Number(check));
    // console.log(typeof check);
    // console.log(multiplier);
    // console.log(result);

    // Remove the rightmost binary
    temp = Math.floor(temp / 10);
    // console.log(binary);
    // console.log(typeof binary);
    // Doubles multiplier for every removed binary
    multiplier = multiplier * 2;
    // console.log(multiplier);
  }
  return result;
}

console.log(binToDec('0'));
console.log(binToDec('101'));
console.log(binToDec('100'));
console.log(binToDec('101'));
console.log(binToDec('1101'));
console.log(binToDec('11101'));
console.log(binToDec('1111111'));

module.exports = binToDec;
