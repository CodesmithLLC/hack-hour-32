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

// you can have only one instance of an odd; only one letter can have an odd number
// time complexity: O(n)
const permPalin = (str) => {
  // tracker to count number of elements
  let trackCount = {};
  // counters the # of odd elements in the tracker
  let numOdd = 0;
  if(str.length === 1) return true;
  // iterate through the string and count elements,
  // putting the count of each element in the track
  for (let i = 0; i < str.length; i++) {
    // check if letter is in tracker; 
    // if not, set it equal to 1
    // if it is in tracker, then you increment by 1 FIRST and then set 
    trackCount[str[i]] = ++ trackCount[str[i]] || 1;
  }
  // then iterate through the tracker and increment num for every odd count
  for (let key in trackCount) {
    if (trackCount[key] % 2 === 1) numOdd++;
    // if you have more than one element with an odd count, return false
    if (numOdd > 1) return false;
  }
  return true;
}

console.log(permPalin('abab'))
console.log(permPalin('cbaba'))
console.log(permPalin('cbacd'))
console.log(permPalin('a'))

module.exports = permPalin;