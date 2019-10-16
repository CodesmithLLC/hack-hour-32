/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 1) {
        return base;
    } else {
        console.log(power)
        return base * pow(base, --power);
    }
}


console.log(pow(3, 8));
console.log(3**8);

module.exports = pow;
