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
// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];


function reverseInPlace(array) {
    for (let i = 1; i < array.length; i += 1) {
        let moved = array.splice(i, 1)[0];
        array.unshift(moved);
    }
    // console.log(array);
}

// reverseInPlace(arr);

module.exports = reverseInPlace;
