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


 //if there is an open and closing paren - true
 //if there isn't closing paren

function balancedParens(input){

}

module.exports = balancedParens;

let regexL = (/\)/g)
let regexR = (/\(/g)
let testString = "(303)5(55)-1212";
let foundLeft = regexL.exec(testString);
let foundRight = regexR.exec(testString);

console.log('Lefties',foundLeft);
console.log('Righties', foundRight);

console.log('Search', testString.search(/\)/g))



// PluginArray
// Loop and Find the indexes of the left ones , replace it with temp Symbol
//