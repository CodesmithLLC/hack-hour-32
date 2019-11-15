/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while(b) {
  let t = b;
  b = a % b;
  a = t;
  }
  return a;
}

module.exports = gcd;