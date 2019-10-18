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
  if (array.length % 2 === 0) {
    for (let i = 0; i < array.length / 2; i += 1) {
      let index = i + 1;
      [array[i], array[array.length - index]] = [array[array.length - index], array[i]];
    }
  } else {
    let arrayMid = Math.floor(array.length / 2)
    for (let i = 0; i < arrayMid; i += 1) {
      let index = i + 1;
      [array[i], array[array.length - index]] = [array[array.length - index], array[i]];
    }
  }
  return array;
}

module.exports = reverseInPlace;

// console.log(reverseInPlace(['a', 'b', 'c', 'd', 'e']))
// console.log(reverseInPlace(['a', 'b', 'c', 'd', 'e', 'f']))
