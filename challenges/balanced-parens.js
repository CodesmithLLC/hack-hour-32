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
    let top;
    for(let i = 0; i < input.length; i++){
        switch(input[i]){
            case '[':
            case '{':
            case '(':
                stack.push(input[i]);
                break;
            case ']':
                top = stack.pop();
                if(top != '[') return false; 
                break;
            case '}':
                top = stack.pop();
                if(top != '{') return false; 
                break;
            case ')':
                top = stack.pop();
                if(top != '(') return false; 
                break;
        }
    }
    return stack.length > 0 ? false : true; 
}

module.exports = balancedParens;
