/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

 //find mode - which is the most repeated number
 // find the mean
 // check them and return true or false   
function modemean(array) {
    // calculating the mean
    let meanSum = 0;
    for (let i = 0; i < array.length; i++) {
        meanSum+=array[i]
    }
    let mean = Math.floor(meanSum/array.length)
    //Checking the mean
    console.log('This is the mean', mean)

    //calculating the mode
    //it gives an object with array elements and the number of repeats
    const mode = {}
    for (let i = 0; i < array.length; i++) {
        if(!mode[array[i]]) {
            mode[array[i]] = 1;
        }
        else {
            mode[array[i]]++;
        }
    }
    //Checking the MODE
    console.log("the object with the modes", mode)
// 
    // return the biggest mode 
    // for the biggest mode[key] return the key
    let currentBiggestKey = 0;
    for (let key in mode) {
        if (mode[key] > currentBiggestKey) {
            currentBiggestKey = key;
    }
    console.log('The biggest mode', currentBiggestKey)
    }   
    //check the mode vs mean
    if (currentBiggestKey === mean) {
        return true;
    }
    return false;

}

const testedArray = [1,2,2,4,4,4]

console.log(modemean(testedArray));

module.exports = modemean;
