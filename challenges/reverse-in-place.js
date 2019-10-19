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
  let length = array.length;
  const oldLength = length;
  // console.log(oldLength);
  let tracker = 0;
  let tempLength;
  for (let i = length - 2; i >= 0; i -= 1) {
    array.splice(length += 1, 0, array[i]);
  }
  console.log(length);
  console.log(oldLength);

  // while (length !== oldLength) {
  //   array.splice(tracker, 1);
  //   tracker += 1;
  // }
  console.log(array);
  while (length !== oldLength) {
    array.splice(tracker, 1);
  }
  return array;
}

console.log(reverseInPlace([1, 2, 3, 4]));

module.exports = reverseInPlace;
