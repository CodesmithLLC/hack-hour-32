/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */
function pow(base, power) {
    if (power === 0) {
        return 1;
    }

    let decrementedPower = power - 1;
    if (power === 1) {
        return base;
    } else {
        return base * pow(base, decrementedPower);
    }
}

module.exports = pow;
