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
  function swap(array, one, two) {
    let oneVal = array[one];
    array[one] = array[two];
    array[two] = oneVal;
    return array;
  }

  let secondIndex = array.length - 1;

  for (let i = 0; i < array.length; i += 1) {
    if (i < secondIndex) {
      array = swap(array, i, secondIndex);
      secondIndex -= 1;
    }
  }
  return array;
}

// console.log(reverseInPlace([1, 2, 3, 4, 5, 6])); 
// console.log(reverseInPlace([1, 2, 3, 4, 5, 6, 7]));

module.exports = reverseInPlace;
