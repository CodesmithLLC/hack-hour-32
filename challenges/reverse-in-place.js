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
    if (array.length < 1) return array;
    // divide array in half and flip
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let ele = array[i] //store first ele
        // first ele = last ele
        array[i] = array[array.length - 1 - i]
        // last ele = first
        array[array.length - 1 - i] = ele
    }
    // return reversed array
    return array;
}

console.log(reverseInPlace([1, 2, 3, 4, 5])) // [5,4,3,2,1]
console.log(reverseInPlace(['a'])) // ['a']
console.log(reverseInPlace([])) // []

module.exports = reverseInPlace;
