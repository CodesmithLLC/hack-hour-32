/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    let filtered = input.split('').filter(char => ['(', ')', '{', '}', '[', ']'].includes(char))
    console.log(filtered)
    let letter = {}
    for (let element of filtered) {
        if (element in letter) {
            letter[element]++
        } else {
            letter[element] = 1
        }
    }
    console.log(letter)
    return letter['['] === letter[']'] && letter['('] === letter[')'] && letter['{'] === letter['}']
}

console.log(balancedParens('[]()asdfasdfasdf{}'))


module.exports = balancedParens;
