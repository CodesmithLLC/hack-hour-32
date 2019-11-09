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
    const obj = {};
	for (let i = 0; i < str.length; i++) {
		if (obj[str[i]]){
            delete obj[str[i]]
        }else{
            obj[str[i]] = 1
        }
	}
	return Object.keys(obj).length <= 1;
}
console.log(permPalin('abab'))
console.log(permPalin('cbaba'))
console.log(permPalin('cbac'))
console.log(permPalin('a'))
module.exports = permPalin;