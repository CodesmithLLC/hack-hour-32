/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let temp = 0;
    for (let i = 0; i <= a / 2; i ++) {
        if (a % i === 0) {
            if (b % i === 0) {
                temp = i
            }
        }
        
    }
    return temp;
}


module.exports = gcd;