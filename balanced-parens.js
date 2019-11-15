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
    let str = input.replace(/[^(){}\[\]]/g, '')
    let temp = []
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    console.log(str)

    for(let i = 0; i < str.length; i++){
        if(str[i] === '(' || str[i] === '{' || str[i] === '['){
            temp.push(str[i]);
        } else {
            let num = temp.pop()
            if(str[i] !== map[num]){
                return false
            }
        }
    }
    if(temp.length !== 0){
        return false
    }
    return true
}

console.log(balancedParens('('))
console.log(balancedParens('()'))
console.log(balancedParens(')('))
console.log(balancedParens('[(]{)}'))
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'))

module.exports = balancedParens;
