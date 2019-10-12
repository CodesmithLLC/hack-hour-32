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
// let arr = [1, 2, 3, 9, 9, 9, 9, 2]
// modemean(arr);

function modemean(array) {
    // initialize sum equal to 0 and mode equal to first item in the array
    let sum = 0;
    let mode = array[0]; 
    // create an empty array to store how many times each item occurs within the array
    let modeFinder = {};
    // each item of the array will be the key in modeFinder
    for (let i = 0; i < array.length; i++) {
        // if that key doesn't exist in the array; set it equal to one
        if (modeFinder[array[i]] === undefined) {
            modeFinder[array[i]] = 1;
            // if it exists, increment the value 
        } else {
            modeFinder[array[i]]++
        }
        // to save time complexity, use the same for loop to find the highest value of the array as you itierate 
        // and return that key as the newmode.
        if (modeFinder[array[i]] > modeFinder[mode]) {
            mode = [array[i]];
        }
        // again to save time complexity, use the same for loop to calculate sum as you go;
        sum += array[i];
    }
    // using the sum just computed, calculate mean;
    
    let mean = Math.floor(sum / array.length);
    
    // console.log(mode === mean);
    // console.log(sum)
    // console.log(mode)
    // console.log(mean)
    return mode === mean;

}

module.exports = modemean;

