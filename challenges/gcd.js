/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let big = (a > b) ? a : b;
    // console.log(big)
    for (let i = big; i >= 1; i -= 1) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }

}
// console.log(gcd(10, 100)) // 10
// console.log(gcd(25, 100)) // 25
// console.log(gcd(10, 13)) // 1
// console.log(gcd(10, 2)) //2 
// console.log(gcd(0, 1)) // 1
module.exports = gcd;