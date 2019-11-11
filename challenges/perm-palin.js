/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true  // baab, abba
 * 	- permPalin('cbaba') => true // bacab , abcba
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function getPermutations(string) {
    const results = [];

    if (string.length === 1) {
        results.push(string);
        return results;
    }

    for (let i = 0; i < string.length; i++) {
        const firstChar = string[i];
        const otherChar = string.substring(0, i) + string.substring(i + 1);
        const otherPermutations = getPermutations(otherChar);

        for (let j = 0; j < otherPermutations.length; j++) {
            results.push(firstChar + otherPermutations[j]);
        }
    }
    return results.filter((el, idx, self) => (self.indexOf(el) === idx));
}

console.log([...new Set(getPermutations(`ababc`))].length)
function isPalin(str) {
    return str === str.split('').reverse().join('')
}


function permPalin(str) {
    if (str.length === 1) return true;
    // get array of permutations
    const permArr = [...new Set(getPermutations(str))];
    //console.log(permArr)

    const results = []
    // loop thru permutations array and push result of result boolean from isPalin(permArr[i])
    for (let i = 0; i < permArr.length; i++) {
        results.push(isPalin(permArr[i]))
    }
    return results.includes(true) ? true : false;
}

// console.log(permPalin('racerae')) //T
// console.log(permPalin('abab')) //T
// console.log(permPalin('cbaba'))//T 
// console.log(permPalin('cbac')) // F
// console.log(permPalin('a')) // T
module.exports = permPalin;