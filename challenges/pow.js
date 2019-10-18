/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

<<<<<<< HEAD
// function pow(base, power) {
//   let result = base;
//   if (power === 0) { return 1;} 
// 	for (let i = 1; i < power; i += 1) {
// 		result *= base;
// 	}
// 	return result;
// }

function pow(base, power) {
	if (power === 0) {return 1;}
  	return pow(base, power - 1)
=======
function pow(base, power) {

>>>>>>> cde3100b441d3629e9dfc88e80f6ef0ae190261a
}

module.exports = pow;
