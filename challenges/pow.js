/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
//we calculate te result ot base*base and store it in var
if (power === 0) return 1;
return base*pow(base,power-1)
}
console.log(pow(3,3))

module.exports = pow;