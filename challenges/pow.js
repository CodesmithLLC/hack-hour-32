/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    //base case
    if (power === 0) {
        return 1
    }
    //bad input
    if (power === undefined) {
        return base
    }
    //if the power is not an integer
    let rootDifference = power - Math.floor(power);;
    if (rootDifference > 0) {
        let roomNum = power / rootDifference;
        let roomDem = 1 / rootDifference;
        
    }
    //if power is an integer
    if (power > 0) {
        return base * pow(base, power - 1)
    } else {
        if (base === 0) {
            return "This calculation cannot be performed"
        }
        return 1/base * pow(base, power + 1)
    }
}

module.exports = pow;
