/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let smaller;
    let gcd;
    if (a < b) {
        smaller = a;
    } else {
        smaller = b;
    }
    for (let i = smaller; i > 0; i -= 1) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
            return gcd;
        }
    }
}


module.exports = gcd;
