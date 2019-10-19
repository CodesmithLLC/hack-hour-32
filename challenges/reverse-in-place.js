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
<<<<<<< HEAD
//swap recursively above pivot recursively
//until 
//we can either recursively have an index, or simply iterate
if(array===undefined) return;
for(let i=0;i<array.length/2;i++){
    let temp=array[i];
    array[i]=array[array.length-i-1];
    array[array.length-i-1]=temp;

}
return array;  
}

module.exports = reverseInPlace;


const arr=['1','2','3','4','5','6'];
console.log(reverseInPlace(arr));
=======

}

module.exports = reverseInPlace;
>>>>>>> 4933dc71e9a778b719f571f369fffd1346f3f5ee
