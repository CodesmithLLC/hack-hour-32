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
    //mean
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += i;
    }
    let mean = Math.floor(sum/array.length);

    //mode
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = 1;
        } else if (obj[array[i]]) {
            obj[array[i]]++;
        }
    }
    
    //loop through obj of counts
    let highestCount = 0;
    let mode;
    for (let j in obj) {
        if (obj[j] > highestCount) {
            highestCount = obj[j];
            mode = j;
        }
    }

    //check if they are equal
    if (mean == mode) {
        return true;
    } else {
        return false;
    }
}

module.exports = modemean;
