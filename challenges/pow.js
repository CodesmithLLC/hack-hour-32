/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 // Tail Call Recursion
function pow(base, power, sum = 1) {
    if (power === 0) return sum;
    return pow(base, power - 1, sum * base)
}

module.exports = pow;


// console.log(pow(3, 3));