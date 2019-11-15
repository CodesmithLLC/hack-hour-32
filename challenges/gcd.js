/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return 1;
    if (a === b) return a;

    // brute force; find the largest int
    if (a > b) {
        // iteratively decrement the int (but start from 2nd number)
        for (let i = b; i >= 0; i--) {
            // test whether int/# has remainder of 0;
            if (a % i === 0) {
                // if so, divide the 2nd int by that # and check if 2nd int/# has remainder of 0 too;
                if (b % i === 0) return i;
            }
        }
    }

    if (b > a) {
        for (let i = a; i >= 0; i--) {
            if (a % i === 0) {
                if (a % i === 0) return i;
            }
        }
    }

    return 1;
}

module.exports = gcd;