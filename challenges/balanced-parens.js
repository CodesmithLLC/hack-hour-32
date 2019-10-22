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

function balancedParens(input) {
  const bracketContainer = [];
  let truthRunner = false;

  if (input.length <= 1) return truthRunner;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') bracketContainer.push(')');
    else if (input[i] === ')') {
      if (bracketContainer[bracketContainer.length - 1] === input[i]) {
        truthRunner = true;
        bracketContainer.pop();
      } else {
        truthRunner = false;
        break;
      }
    }
    if (input[i] === '[') bracketContainer.push(']');
    else if (input[i] === ']') {
      if (bracketContainer[bracketContainer.length - 1] === input[i]) {
        truthRunner = true;
        bracketContainer.pop();
      } else {
        truthRunner = false;
        break;
      }
    }
    if (input[i] === '{') bracketContainer.push('}');
    else if (input[i] === '}') {
      if (bracketContainer[bracketContainer.length - 1] === input[i]) {
        truthRunner = true;
        bracketContainer.pop();
      } else {
        truthRunner = false;
        break;
      }
    }
  }

  if (bracketContainer.length > 0) truthRunner = false;

  return truthRunner;
}
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));

console.log(balancedParens('[]'));
console.log(balancedParens('{}'));
console.log(balancedParens('{}[]()'));
console.log(balancedParens('[({})]'));
console.log(balancedParens('[(]{)}'));
console.log(balancedParens('[[{{}}()]{}]'));

console.log(balancedParens('()'));
console.log(balancedParens('('));
console.log(balancedParens('(()'));
console.log(balancedParens('(())'));
console.log(balancedParens(')('));
console.log(balancedParens('(()))()'));
console.log(balancedParens('(((()())))'));

module.exports = balancedParens;

// Parenthesis Only
//
// function balancedParens(input) {
//   const bracketContainer = [];
//   let truthRunner = false;

//   if (input.length <= 1) return truthRunner;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === '(') bracketContainer.push(')');
//     else if (input[i] === ')') {
//       if (bracketContainer[bracketContainer.length - 1] === input[i]) {
//         truthRunner = true;
//         bracketContainer.pop();
//       } else {
//         truthRunner = false;
//         break;
//       }
//     }
//   }

//   if (bracketContainer.length > 0) truthRunner = false;

//   return truthRunner;
// }

//With other bracket types
//
// function balancedParens(input) {
//   const bracketContainer = [];
//   let truthRunner = false;

//   if (input.length <= 1) return truthRunner;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === '(') bracketContainer.push(')');
//     else if (input[i] === ')') {
//       if (bracketContainer[bracketContainer.length - 1] === input[i]) {
//         truthRunner = true;
//         bracketContainer.pop();
//       } else {
//         truthRunner = false;
//         break;
//       }
//     }
//     if (input[i] === '[') bracketContainer.push(']');
//     else if (input[i] === ']') {
//       if (bracketContainer[bracketContainer.length - 1] === input[i]) {
//         truthRunner = true;
//         bracketContainer.pop();
//       } else {
//         truthRunner = false;
//         break;
//       }
//     }
//     if (input[i] === '{') bracketContainer.push('}');
//     else if (input[i] === '}') {
//       if (bracketContainer[bracketContainer.length - 1] === input[i]) {
//         truthRunner = true;
//         bracketContainer.pop();
//       } else {
//         truthRunner = false;
//         break;
//       }
//     }
//   }

//   if (bracketContainer.length > 0) truthRunner = false;

//   return truthRunner;
// }
