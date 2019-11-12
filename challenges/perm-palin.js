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
    if (typeof str !== "string" || str.length === 0) return false;
    if (str.length === 1) return true;

    if (str.length % 2 === 0) {
        for (let i = 0; i < str.length; i++) {
            for (let j = i; j < str.length; j++) {
                if (str[j] === str[j+3] && str[j+1] === str[j+2]) return true;
            }
        }
    }

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (str[j] === str[j+2]) return true;
        }
    }   

    return false;
}

// console.log(permPalin('cbaba'))
// console.log(permPalin('abab'))

module.exports = permPalin;