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
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  // input = input.replace(/[^(){}[]]/, '')
  const arr = [];
  input = input.split('')
  // console.log(input)
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === ')' || input[i] === '('|| input[i] === '[' || input[i] === ']' || input[i] === '{' || input[i] === '}') {
      arr.push(input[i])
    }
  }
  console.log(arr)
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1 ) {
    if (arr[i] === '{' || arr[i] === '('|| arr[i] === '[' ) {
      newArr.push(arr[i]);
    } else {
      let last = newArr.pop();
      if (arr[i] !== map[last]) {
        return false;
      }
    }
  }
  if (newArr.length !== 0) return false;
  return true;
}

module.exports = balancedParens;

console.log(balancedParens( 'var wow  = { yo: thisIsAwesome() }'));
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))
