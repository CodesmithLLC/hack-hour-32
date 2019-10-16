/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let result = base;
  if (power === 0) { return 1;} 
	for (let i = 1; i < power; i += 1) {
		result *= base;
	}
	return result;
}

module.exports = pow;
