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

	let pairs = {
		'{': '}',
		'[': ']',
		'(': ')',
	};

	for (let i = 0; i < input.length; i += 1) {
		if (Object.keys(pairs).includes(input[i])) {
			stack.push(input[i]);
		} else if (pairs[stack[stack.length - 1]] === input[i]) {
      		stack.pop()
    	} else if (Object.values(pairs).includes(input[i])) {
      		return false;
    	}
	}
  return stack.length === 0;
}

module.exports = balancedParens;
