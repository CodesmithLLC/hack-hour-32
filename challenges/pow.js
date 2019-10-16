/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (base === undefined || power === undefined) return 'Give me argumeeeents!';

    return base ** power;
}

// console.log(pow(2, 3)) // 8 
// console.log(pow(0, 3)) // 0
// console.log(pow(10, 3)) // 1000
// console.log(pow(-10, 3)) // -1000
module.exports = pow;
