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
    const obj = {};
    let openning = 0;
    let closing = 0;
    for (let i = 0; i < input.length; i++) {
        if (obj[input[i]] === undefined && input[i] === '(' || input[i] === '[' || input[i] === '{') {
            obj[input[i]] = openning;
            obj[input[i]]++;
        } else if (obj[input[i]] === undefined && input[i] === ')' || input[i] === ']' || input[i] === '}') {
            obj[input[i]] = closing;
            obj[input[i]]++;
        }
    } 
    // first letter of input should be openning bracket
    if (input[0] === '(' || input[0] === '[' || input[0] === '{') {
        for (let key in obj) {
            if (obj['('] === obj[')'] || obj['['] === obj[']'] || obj['{'] === obj['}']) return true
        }
    }
    return false;
}

console.log(balancedParens(''))

module.exports = balancedParens;
