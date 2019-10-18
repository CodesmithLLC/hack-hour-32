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
for (let i = 0; i < (array.length)/2; i++) {
   let earlier = array[i];                       //array[0]                   array[1]
   array[i] = array[array.length - 1 - i];       //array[0] = array[3]        array[1] = array[2]
   array[array.length - 1 - i] = earlier;        //array[3] = array[0]        array[2] = array[1]
}
return array;
}

module.exports = reverseInPlace;

// console.log(reverseInPlace(['a','b','c','d']));