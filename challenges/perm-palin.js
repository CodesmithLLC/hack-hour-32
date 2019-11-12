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
    const frequency = {};

    for (let i = 0; i < str.length; i++) {
        if (frequency[str[i]]) {
            frequency[str[i]] += 1;
        } else {
            frequency[str[i]] = 1;
        }
    }
    if (Math.max(...(Object.values(frequency))) <= 1) return false;

    
}

module.exports = permPalin;