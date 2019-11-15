/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

    //starting at 1 is the incrementor
    if(a===undefined || b===undefined){
        return 0;
    }
    else{
        let result=1;
        if(b%a===0){ return a}
        else if(a%b===0){ return b}

        for(let i=1;(i<a && i<b); i++){
            if(a%i===0 && b%i===0){ result=i}
        }

        return result;
    }

    
}


console.log(gcd(9, 10))
module.exports = gcd;