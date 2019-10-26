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

const tester = '111'

function binToDec(binary) {
//turn input into an array
const array = binary.split('');
const array2 = [];
for (let i = 0; i<array.length; i++) {
    array2.push(parseInt(array[i]))
    }

let total = 0;

for (let j = 0; j < array2.length; j++) {
total = total * 2 + array2[j]; 

}
return total
   
}

console.log(binToDec(tester))

module.exports = binToDec;
