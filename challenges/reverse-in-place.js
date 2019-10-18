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

// function reverseInPlace(array) {
//     // loop through array; re-assign head and tail to each other; work way towards middle of array
//     let i = 0;
//     let j = array.length -1;
//     // amount of times one needs to flip is equal to half of the array length rounded up
//     let steps = Math.ceil(array.length / 2);
//     // console.log(steps);
    
//     // in case the array has an odd amount of values, don't take the extra step to flip the middle value with itself
//    while (steps > 0 && array[i] !== array[j]) {
//         let headPlaceholder = array[i];
//         // console.log(headPlaceholder);
//         let tailPlaceholder = array[j];
//         // console.log(tailPlaceholder);
        
//         array[i] = tailPlaceholder;
//         array[j] = headPlaceholder;

//         steps--;
//         console.log(steps);
//         i++;
//         // console.log(i);
//         j--;
//         // console.log(j);
//     }

//     return array;
// }


function reverseInPlace(array, i = 0, j = array.length - 1, steps = Math.ceil(array.length / 2)) {
    // base case (same as end of while loop)
    if (steps === 0 && array[i] !== array[j]) return array;

    // store the values
    let headPlaceholder = array[i];
    let tailPlaceholder = array[j];
       
    // flip the values
    array[i] = tailPlaceholder;
    array[j] = headPlaceholder;

    return reverseInPlace(array, i + 1, j - 1, steps - 1)
}

module.exports = reverseInPlace;

// const alphabet = ['a', 'b', 'c', 'd', 'e'];
// const alphabet2 = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(reverseInPlace(alphabet));
// console.log(reverseInPlace(alphabet2));