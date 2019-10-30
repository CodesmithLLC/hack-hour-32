/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let sorted = array.sort().reverse();
    let product = sorted[0] * sorted[1] * sorted[2];
    return product;
}

// function highestProduct(array) {
//     //create copy array
//     let copy = [...array];
//     //array of numbers for summation
//     let sumArr = [];
//     //we need to call this multiple times, so we need a count
//     let count = 1;
//     function innerFunc() {
//         if (count > 3) {
//             return copy.reduce((acc, cur) => {
//                 acc *= cur;
//                 return acc;
//             })
//         } else {
//             //loop through to find all three
//         for (let i = 0; i < copy.length; i++) {
//             //find largest
//             largest = Math.max.apply(Math, array);
//             console.log(`largest on iteration: ${largest}`)
//             //push it to the new storage array
//             sumArr.push(copy[i]);
//             console.log(`sumArr at iteration: ${sumArr}`)
//             //remove it from the copy array
//             copy.splice(i,1)
//             console.log(`copy after splice: ${copy}`)
//             count++;

//             innerFunc()
//         }
//         }
//         }
// }

// console.log(highestProduct([1,3,5,2,6,4]));

module.exports = highestProduct;
