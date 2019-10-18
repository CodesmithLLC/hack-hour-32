'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  // Should be logn
  // If array exists
  if (array) {
    for (let i = 0; i < (array.length - 1) / 2; i++) {
      // Append the second character swtich origin
      array[i] += array[array.length - 1 - i];

      // Get the first character (switch origin value) and save to the switch destination
      array[array.length - 1 - i] = array[i].slice(0, 1);

      // Get the appended character and save it to switch origin
      array[i] = array[i].slice(1);
    }
  }

  return array;
}

const str = 'ab';

console.log(str.slice(0, 1));
console.log(str.slice(0));
console.log(str.slice(1));

const arr = ['a', 'b', 'c', 'd'];

console.log(reverseInPlace(arr));

console.log(reverseInPlace());
console.log(reverseInPlace([]));
console.log(reverseInPlace(['a']));
console.log(reverseInPlace(['a', 'b']));
console.log(reverseInPlace(['a', 'b', 'c', 'd', 'e']));

module.exports = reverseInPlace;
