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
    let balanced = true;
    if (input.length === 1) {
        return false;
    } else {
        let indexArr = [];
        indexArr.push()


        // while (input.length) { 
        //     let openingIndex = input.indexOf("("); 
        //     console.log(openingIndex); 
        //     let closingIndex = (input.length -1) - openingIndex;
        //     if (input.charAt(closingIndex) === ')') {
        //         input = input.slice(openingIndex + 1, closingIndex)
        //     } else {
        //         balanced = false;
        //     }
        // }
        return balanced;
    }
}

   console.log(balancedParens('(()('));
//    balancedParens('()'); // true
//    balancedParens(')(');  // false
//    balancedParens('(())');  // true OP 0 1 CP 2 3 
module.exports = balancedParens;
