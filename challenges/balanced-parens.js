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
  const checkBalancedParens = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
  }
  // use a stack to keep track 
  const keepTrackArr = [];
  for(let i = 0; i < input.length; i += 1) {
    if(input[i] === '(' || input[i] === '{' || input[i] === '[') {
      keepTrackArr.push(input[i]);
    }
    else {
      let lastElement = keepTrackArr.pop();
      if(input[i] !== checkBalancedParens[lastElement]) return false;
    }
  }
  return keepTrackArr.length === 0;
}

console.log(balancedParens('(){}[]'));

module.exports = balancedParens;
