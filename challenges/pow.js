/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, product = 1) {
    if(power === 0 ){ return product }
    product *= base;
    power--;
    return pow(base, power, product)
}

module.exports = pow;
