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
    //binary string
    //converts binary to decimal
    if(binary===undefined || binary.length===0){
        return;
    }


    let result=0;
    for(let i=0;i<binary.length;i++){
        //the twos match the decimal
        let el=binary[i];
        let addition=1;
        if(el==='1'){ //2^3 is 8
            
            for(let g=1;g<=i;g++){
                addition*=2;
            }
            result+=addition;
            addition=1
        }

        else if(el==='0'){
            continue;
        }
      
    }
    return result;
}


console.log(binToDec('11')); // -> 3
console.log(binToDec('100'));
console.log(binToDec('101'));
console.log(binToDec('0101'));
module.exports = binToDec;
