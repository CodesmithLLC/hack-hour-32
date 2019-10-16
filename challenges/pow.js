/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

//  // Tail Call Recursion
function pow(base, power, sum = 1) {
    if (power === 0) return sum;

    return power < 0 ? pow(base, power + 1, sum / base) : pow(base, power - 1, sum * base);
}

module.exports = pow;
