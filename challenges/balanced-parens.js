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
// const pairs = {
//     '(': ')',
//     '{': '}',
//     '[': ']'
// }


// const opens = Object.keys(pairs)
// const values = Object.values(pairs)
// function isOpen(str) {
//     return opens.includes(str)
// }
// function isClosing(str) {
//     return values.includes(str)
// }

function balancedParens(input) {


    if (input.length % 2 !== 0) return false; // input has uneven length => false

    let stack = []; // use a stack to keep track of pairs
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < input.length; i++) {

        if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
            stack.push(input[i]); // push opening into stack
        }
        else {
            let last = stack.pop();

            if (input[i] !== pairs[last]) return false;
        }
    }
    if (stack.length !== 0) { return false }; // if stack has unmatched pair/ isn't empty

    return true;

}



console.log(balancedParens('[({)]'))


module.exports = balancedParens;
