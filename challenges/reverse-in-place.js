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
    let arrayLength = array.length;
 for (let i = 0; i<arrayLength; i++) {
  array.splice(0,1,arrayLength) //here i     qaaa                                                                                                                                               need to put the last element 
 }
}

module.exports = reverseInPlace;

let arrayToBeReversed = [ 'a','b',3,4,5,6]

reverseInPlace(arrayToBeReversed)
console.log(arrayToBeReversed)