/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let greatestDenom = 1;

  if (a < b) {
    for (let i = 2; i <= a; i += 1) {
      if (a % i === 0 && b % i === 0) {
        greatestDenom = i;
      }
    }
  }
  if (b < a) {
    for (let i = 2; i <= b; i += 1) {
      if (a % i === 0 && b % i === 0) {
        greatestDenom = i;
      }
    }
  }

  return greatestDenom;
}


module.exports = gcd;