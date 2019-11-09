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
	const holding = {};
	let odds = 0;
    if (str.length % 2 !== 0) {
        for (let i = 0; i < str.length; i += 1) {
            if (holding[str[i]] === undefined) {
                holding[str[i]] = 1;
            } else {
                holding[str[i]] += 1;
            }
        }
        for (let prop in holding) {
            if (holding[prop] % 2 !== 0) {
                odds += 1;
            }
        }
        if (odds !== 1) return false;
        return true;
    } else {
	    for (let i = 0; i < str.length; i += 1) {
            if (holding[str[i]] === undefined) {
                holding[str[i]] = 1;
            } else {
                holding[str[i]] += 1;
            }
        }
        for (let prop in holding) {
            if (holding[prop] % 2 !== 0) {
                odds += 1;
            }
        }
        if (odds !== 0) return false;
        return true;
    }
}


module.exports = permPalin;
