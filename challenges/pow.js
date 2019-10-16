/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, score=1) {
    if (power === 0 ){
        return score;
    }
    return pow(base, power-= 1, score*base)
}
console.log(pow(3,4))
module.exports = pow;
