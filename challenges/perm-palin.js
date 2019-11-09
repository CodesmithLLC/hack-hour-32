/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('czaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  if(!str) return false;
  if(str.length === 1) return true;
  for(let i = 0; i < str.length; i++){
    if(str[i + 1]){
      if(str[i] === str[i+1])
        return true;
    }
    if(str[i + 2]){
      if(str[i] === str[i+2])
        return true;
    }
  }
  return false; 
}

module.exports = permPalin;