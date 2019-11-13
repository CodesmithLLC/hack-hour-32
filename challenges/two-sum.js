/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

    //iterate arry/2 see if the difference is also there
    if(arr===undefined || arr.length===0){ return false}

    for(let i=0;i<arr.length/2+1;i++){
        let el=arr[i]
        if(arr.indexOf(n-el)>=0){ return true}
    }

    return false
}


// let arr=[1,2,3,4,5,6,7]
// console.log(twoSum(arr,8))
// console.log(twoSum(arr,9))
// console.log(twoSum(arr,90))
module.exports = twoSum;
