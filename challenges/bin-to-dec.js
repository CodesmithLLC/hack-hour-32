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

function binToDec(binary, i = binary.length - 1, result = 0, multiplier = 1) {
  // base case
  if (!binary[i]) return result;
  // recursive case
  if (binary[i] !== '0') result += multiplier;
  return binToDec(binary, i - 1, result, multiplier * 2);
}

// console.log(binToDec('0'));
// console.log(binToDec('11'));
// console.log(binToDec('100'));
// console.log(binToDec('101'));
// console.log(binToDec('0101'));
// console.log(binToDec('1111'));
// console.log(binToDec('11011001'));

// function decToBin(decimal) {
//   let result = '';
//   let multiplier = 1;
//   while (multiplier < decimal) {
//     multiplier *= 2;
//   }
  
//   while (decimal) {
//     if ((decimal / multiplier) >= 1) result += '1';
//     else if ((decimal / multiplier) < 1) result += '0';
//     multiplier = multiplier / 2;
//   }
//   return result;
// }

// console.log(decToBin(0));
// console.log(decToBin(3));
// console.log(decToBin(4));
// console.log(decToBin(5));
// console.log(decToBin(15));
// console.log(decToBin(217));

module.exports = binToDec;
