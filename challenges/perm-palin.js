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
	if (str.length === 1) return true;

	let newObj = {};
  let oddNumbers = 0;

	let stringArray = str.split('');
	stringArray.forEach(element => {
		if (!newObj[element]) { newObj[element] = 0; }
		newObj[element] += 1;
	});

  for(let letter in newObj) {
    if (newObj[letter] % 2 !== 0) {
      oddNumbers += 1;
    }
  }

	return oddNumbers > 1 ? false : true;
}

module.exports = permPalin;