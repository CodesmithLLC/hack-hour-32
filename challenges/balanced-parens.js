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
    const paranPairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
   
    let filteredInput = input.replace("[^(){}[]]", "");
    console.log(filteredInput);

    if (filteredInput.length % 2 === 1) return false;
    // step 1
    // if (inputSplit[0] === "(" && inputSplit.endsWith(")")) return true;
    // return false;

    // step 2
    let howManyCorrectPairsNeeded = filteredInput.length / 2;
    console.log(howManyCorrectPairsNeeded);
    // first check if their are valid pairs within the str
    let i = 0;
    let count = 0;
    for (let key in paranPairs) {
        console.log(key);
        while (i < filteredInput.length / 2) {
            console.log(i)
            console.log(i + 1)
            console.log(filteredInput[i])
            console.log(filteredInput[i + 1])
            if (filteredInput[i] === key && filteredInput[i + 1] === paranPairs[key]) {
                count++;
                console.log(count);
                i += 2;
                console.log(i);
                break;
            } if (filteredInput[i] === key && filteredInput[filteredInput.length - 1] === paranPairs[key]) {
                count++;
                console.log(count);
                i++;
                console.log(i);
            } else {
                break;
            }
        }
    }
    
    console.log(howManyCorrectPairsNeeded);
    console.log(count);

    if (count === howManyCorrectPairsNeeded) return true;
    else return false;
}

// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true

console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]')); // true
// console.log(balancedParens('[(]{)}')); // false

// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;

// fellow approach

// /*
//  * write a function that takes a string of text and returns true if
//  * the parentheses are balanced and false otherwise.
//  *
//  * Example:
//  *   balancedParens('(');  // false
//  *   balancedParens('()'); // true
//  *   balancedParens(')(');  // false
//  *   balancedParens('(())');  // true
//  *
//  * Step 2:
//  *   make your solution work for all types of brackets
//  *
//  * Example:
//  *  balancedParens('[](){}'); // true
//  *  balancedParens('[({})]');   // true
//  *  balancedParens('[(]{)}'); // false
//  *
//  * Step 3:
//  * ignore non-bracket characters
//  * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
//  * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
//  *
//  *
//  */
// function balancedParens(input){
//     // we're using an array as a stack to take advantage
//     // of its native push and pop methods
//   const stack = [];
//     // these sets check if we're going a level deeper in our nesting
//     // or if we go a level out. Check the docs 
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//   const openBr = new Set(['{','<','[','(']);
//   const closeBr = new Set(['}','>',']',')']);
//   // pairs object is used to check if we've got matching brackets
//   // console.log(openBr)
//   // console.log(closeBr)
//   const pairs = {
//     '}':'{',
//     '>':'<',
//     ']':'[',
//     ')':'('
//   }
//   //step 1 : loop over the string
//   for (let i = 0; i < input.length; i++){
//       //step 2: check for opening/closing brackets
//     if (openBr.has(input[i])){
//         //if it's opening, we know we're nested a level deeper
//       stack.push(input[i]);
//     } else if (closeBr.has(input[i])){
//         //if it's closing, we check for some situations where
//         //it'll be unbalanced. if it doesn't match any of those
//         //we go ahead and get one level shallower
//       if (stack.length < 1) return false;
//         //if the stack is length 0, there's no level shallower to go
//         //therefore it must be unbalanced
//       if (stack[stack.length-1] !== pairs[input[i]]) return false;
//         //if the last item in the stack doesn't match our closing brace
//         //it must be unbalanced
//       stack.pop();
//         //otherwise, we know we've finished one level of nesting and can go up
//     } 
//   }
//     //if we survive the loop, the stack either will have stuff on it or it won't
//     //if it's got stuff, we know there was an opening brace that wasn't closed
//     //the ! operator type coerces our length into a boolean- 0 evaluates falsey
//   return (!stack.length);
// }
// // console.log('1:  ' + balancedParens('('))  // false
// // console.log('2: ' + balancedParens('()')); // true
// // console.log('3: ' + balancedParens(')('));  // false
// // console.log('4: ' + balancedParens('(())'));  // true
// // console.log('5: ' + balancedParens('[](){}')); // true
// // console.log('6: ' + balancedParens('[({})]'));   // true
// // console.log('7: ' + balancedParens('[(]{)}')); // false
// // console.log('8: ' + balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
