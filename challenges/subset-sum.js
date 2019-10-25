/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// function subsetSum(array, target) {
// let tempSum = 0;
//     for (let i = 0; i<array.length; i++) {
//        if(array[i]=== target) {
//         return true;
//        } else if (array[i] > target) {
//         //    console.log('I\'m way bigger, dude')
//     } else if (array[i] < target) {
//        tempSum+=array[i];
//     //    console.log('Tempsum is', tempSum)
//        for (let j = 1; j<array.length; j++) {
//            if (array[i]+array[j]===target) {
//                return true
//            } else if (array[i]+array[j]>target) {
//             console.log('Nope, I am bigger again')
//            } else if (array[i]+array[j]>target) {
//             tempSum+=array[j];
//            }
//        }//end of j loop
//     }
//  }//end of i for loop
// }//end of func

function subsetSum(array, target) {
    let tempSum = 0;
    for (let i = 0; i<array.length; i++) {
        if(array[i]=== target || tempSum === target) {
        return true;
    } else if (array[i]<target){
        tempSum+=array[i];
        
    } 

console.log(subsetSum([8,-2, 1, -3], 6))

module.exports = subsetSum;