/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, tracker = 1) {
    if (power === 0) {
        return tracker;
    }
    return pow(base, power -= 1, tracker *= base); //increase the base while decreasing the power
}

module.exports = pow;
