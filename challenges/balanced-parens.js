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
const parens = {'(' : ')', '{' : '}', '[' : ']'};

function balancedParens(input) {
    const stack = [];
    const secondStack = [];

    for (let i = 0; i < input.length; i += 1) {
        if (input[i] === '(' || input[i] === '[' || input[i] === '{' || input[i] === ')' || input[i] === ']' || input[i] === '}' ) {
            stack.push(input[i]);
        }
    }
    console.log(stack)
    for (let i = 0; i < stack.length; i += 1) {
        if (stack[i] === '(' || stack[i] === '[' || stack[i] === '{' ) {
            secondStack.push(stack[i]);
        } else {
            let popped = secondStack.pop();
            if (stack[i] !== parens[popped]) return false;
        }
    }
    if (secondStack.length !== 0) return false;
    return true;
}


console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))


module.exports = balancedParens;
