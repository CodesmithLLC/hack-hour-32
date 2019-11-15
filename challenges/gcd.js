/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const arr = [];
  for(let i = 1; i <= a; i++){
    if(a % i === 0 && b % i === 0){
      arr.push(i)
    }
  }
  arr.sort((a,b)=>a-b)
  return arr[arr.length-1];
}

module.exports = gcd;