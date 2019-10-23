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
                break
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
