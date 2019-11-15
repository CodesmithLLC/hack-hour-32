/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let greatest = 0;
  for(let i = 0; i < Math.min(a,b); i++){
    if(a % i === 0 && b % i === 0)
      greatest = i;
  }
  return greatest;
}

console.log(gcd(10, 9));
module.exports = gcd;