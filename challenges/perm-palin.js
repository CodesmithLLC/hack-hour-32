/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  const rev = str.split('').reverse().join('');
  let candidate = rev[0];

  // Edge cases
  if (str.length < 2) return true

  for (let i = 1; i < rev.length; i++) {
	candidate = candidate.concat(rev[i]);
	if (str.indexOf(candidate) !== -1) return true
  }

  return false;
}


module.exports = permPalin;
