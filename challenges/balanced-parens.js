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
    const cache = [];
    const inputArray = input.split('');
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === '(' || inputArray[i] === '[' || inputArray[i] === '{') {
            cache.push(inputArray[i]);
        } else if (inputArray[i] === ')' || inputArray[i] === ']' || inputArray[i] === '}') {
            for (let j = cache.length; j > 0; j--) {
                if (cache[j - 1] === '(' && inputArray[i] === ')') {
                    cache[j - 1] += inputArray[i];
                } else if (cache[j - 1] === '[' && inputArray[i] === ']') {
                    cache[j - 1] += inputArray[i];
                } else if (cache[j - 1] === '{' && inputArray[i] === '}') {
                    cache[j - 1] += inputArray[i];
                }
            }
        }
            console.log(cache);
    }
    for (let i = 0; i < cache.length; i++) {
        if (cache[i] !== '()' && cache[i] !== '[]' && cache[i] !== '{}') {
            return false;
        }
    }
    return true;
}




console.log('Should be false, actual is >> ', balancedParens('('));
console.log('Should be true, actual is >> ', balancedParens('()'));
console.log('Should be false, actual is >> ', balancedParens(')('));
console.log('Should be true, actual is >> ', balancedParens('(())'));

console.log('Should be true, actual is >> ', balancedParens('[](){}'));
console.log('Should be true, actual is >> ', balancedParens('[({})]'));
console.log('Should be false, actual is >> ', balancedParens('[(]{)}'));

module.exports = balancedParens;
