/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result = 1) {
  //
  //  Recursion
  //

  // if (power === 1) return base;
  // else return pow(base, power - 1) * base;

  //
  //  Recursion (Tail??)
  //
  if (power === 1) return result * base;
  else return pow(base, power - 1, result * base);

  //
  //  Iterative
  //
  // let pow = base;
  // for (let i = 1; i < power; i++) {
  //   pow *= base;
  // }
  // return pow;

  //
  // Magic
  //
  // return base**power
}

console.log(pow(3, 3));
console.log(pow(4, 3));
console.log(pow(10, 2));
console.log(pow(10, 3));
console.log(pow(2, 8));

module.exports = pow;
