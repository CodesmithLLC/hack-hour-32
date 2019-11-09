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
  let countObj = {};
  for (let i = 0; i < str.length; i++) {
    if (countObj[str[i]] === undefined) {
      countObj[str[i]] = 1;
    } else {
      countObj[str[i]]++;
    }
  }
  console.log(countObj);
  for (let key in countObj) {
    if (countObj[key] % 2 === 0) {
      delete countObj[key];
    }
  }
  console.log(countObj);
  let keys = Object.keys(countObj);
  if (keys.length > 1) return false;
  else return true;
}

module.exports = permPalin;
