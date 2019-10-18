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
    let size = array.length;
    for (let i = size; i > 0; i--) {
        array.push(array[i-1]);
    }
    for (let i = 0; i < size; i++) {
        array.shift();
    }
    return array;
}

const myArray = ['1', '2', '3', '4', '5'];
const yourArray = [1, 2, 3, 4, 5];
console.log(reverseInPlace(myArray));
console.log(reverseInPlace(yourArray));

module.exports = reverseInPlace;
