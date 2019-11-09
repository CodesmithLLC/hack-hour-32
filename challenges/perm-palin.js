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
    const cache = {};
    let odd = false;
    for (let i = 0; i < str.length; i ++) {
        if (cache[str[i]] === undefined) {
            cache[str[i]] = 1;
        } else {
            cache[str[i]]++;
        }
    }
    const check = Object.values(cache)
        for (let i = 0; i < check.length; i ++) {
          if (check[i] % 2 !==0 && odd === true) {
              return false
            }
          if (check[i] % 2 !== 0 && odd === false) {
              odd = true
          }
        }
  return true;
}

module.exports = permPalin;