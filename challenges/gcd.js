/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let max = Math.max(a, b);
  let divisor = 1;
  let count = 1;
  while (count <= max) {
    if (a % count == 0 && b % count == 0 ) {
      divisor = count
    }
    count += 1;
  }  
  return divisor;
}

module.exports = gcd