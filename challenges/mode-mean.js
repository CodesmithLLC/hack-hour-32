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


function modemean(array) {
    let mean = 0;
    for (let i = 0; i < array.length; i++) {
        mean += array[i];
    }
    mean = mean / array.length;

    const obj = {};
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (!obj[array[i]]) obj[array[i]] = counter; 
        obj[array[i]]++;
    }
    let mode = 0;
    for (let key in obj) {
        if (obj[key] > mode) mode = obj[key]; 
    }
    if (mean === mode) return true;
    else return false;
}

var arr = [2,2,2,1,5,8,1];
console.log(modemean(arr)); // expected 'true'
var arr = [2,2,2,1,5,8,2];
console.log(modemean(arr)); // expected 'false'



module.exports = modemean;
