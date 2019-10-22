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
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < input.length; i++) {
        //if it has an opening brace, add it to the stack
        if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
            stack.push(input[i]);
        }
        //if it has a closing brace, remove it from the stack
        else {
            let closing = stack.pop();
            //match with partner in 'map'
            if (input[i] !== map[closing]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    } return true;
}

module.exports = balancedParens;
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false