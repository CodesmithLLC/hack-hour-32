/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let count = 0;
    for (let i=0; i<array.length; i++){
        for (let j=i+1; j<array.length; j++){
            for (let k=j+1; k<array.length; k++){
                if (array[i]*array[j]*array[k] > 0){
                    count = array[i]*array[j]*array[k];
                }else if (array[i]*array[j]*array[k] < 0){
                    return count;
                }
            }
        }
    }
    return count;
}
function highestProduct2(array){
    const sortedArr = array.sort((a,b)=>{return a-b})
    console.log(sortedArr)
    if (array.length < 2) return sortedArr[0]
    if (array.length < 3) return sortedArr[sortedArr.length-1] * sortedArr[sortedArr.length-2]
    return sortedArr[sortedArr.length-1] * sortedArr[sortedArr.length-2] * sortedArr[sortedArr.length-3];
}
// console.log(highestProduct([1,2,3,4]))
// console.log(highestProduct([1,2,3,4,2,-8,-100]))
console.log(highestProduct2([1]))
console.log(highestProduct2([1,2,3,4,2,-8,-100]))

module.exports = highestProduct;

// function highestProduct2(array) {
//     const sortedArr = array.sort((a,b)=>{return b-a})
//     console.log(sortedArr)
//     let count = 0;
//     for (let i=0; i<array.length; i++){
//         for (let j=i+1; j<array.length; j++){
//             for (let k=j+1; k<array.length; k++){
//                 if (array[i]*array[j]*array[k] > 0){
//                     count = array[i]*array[j]*array[k];
//                 }else if (array[i]*array[j]*array[k] < 0){
//                     return count;
//                 }
//             }
//         }
//     }
//     return count;
// }