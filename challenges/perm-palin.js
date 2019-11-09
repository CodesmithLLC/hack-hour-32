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
    if (str.length < 3) return true;
    let reverse = str.split('').reverse().join('')
    console.log(reverse)
    // console.log()
    for (let i = 3 ; i < reverse.length + 1 ; i++) {
        console.log(i)
        let compared = reverse.slice(0, i)
        console.log(compared)
        if (str.includes(compared)) {
            console.log('str is', str);
            console.log('commpared is', compared)
            return true;
        }
    }
    return false;


	
}


console.log(permPalin('cbaababababababba'))

module.exports = permPalin;