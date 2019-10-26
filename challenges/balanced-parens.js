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
    const arr = [];
    const obj = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
    }
    for (let i=0; i<input.length; i++){
        for (let keys in obj){
            if(input[i] === keys){
                arr.push(input[i])
            }
        }
        if (obj[input] === input[i]){
            arr.pop()
        }
    }
    return arr.length === 0;










// for (let i=0; i<input.length; i++){
//     for (let keys in obj){
//         if (input[i] === keys){
//             arr.push(input[i])
//         } 
//     }
//     if (obj[arr[arr.length-1]] === input[i]){
//         arr.pop()
//     }
// }
// if (arr.length === 0){
//     return true;
// }
// return false;
}
console.log(balancedParens('[]()difjqwkajdfklsdf{}'));
console.log(balancedParens('[({})]'));
console.log(balancedParens('[(]{)}'));
module.exports = balancedParens;
