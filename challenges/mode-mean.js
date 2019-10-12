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
    // test cases
    if (!Array.isArray(array) || array.length === 0) return 'Please enter a valid array of numbers.';
    let isValid = true;

    // sum up the numbers in the arr
    // if at any point an arr element is NaN, isValid test will stop the function
    const total = array.reduce((acc, curVal) => {
        if (typeof curVal !== "number") isValid = false;
        acc += curVal;
        return acc;
    });
    
    if (isValid === false) return 'Please enter a valid array of numbers.';

    // calculate mean by flooring the total / total.length
    const mean = Math.floor(total / array.length);
    console.log(mean)
    
    // create a cache tracks the occurence of each number in the arr
    // the cache will automatically order the array elements from least to greatest
    const cache = array.reduce((acc, curVal) => {
        if (!acc[curVal]) {
            acc[curVal] = 1;
        } else {
            acc[curVal]++;
        }
        return acc;
    }, {})
    
    let tracker = 1;
    let mode;
    // iterate through the cache, updating a tracker whenever a number's count is higher than what was found previously
    // if so, update the mode
    // the max mode is found because the cache already orders the keys (original arr numbers) from least to greatest
    for (let numCount in cache) {
        if (cache[numCount] > tracker || cache[numCount] === tracker) {
            tracker = cache[numCount]
            // parseInt so can check === instead of == when comparing mean and mode
            mode = parseInt(numCount);
        }
    }

    console.log(cache);
    console.log(mode);

    // if the mode and mean are equivalent, return true
    if (mode === mean) return true;
    return false;
}


// TESTS
// const numArray = [3, 3, 3, 3, 1, 1, 1, 1, 2, 10, 11, 12, 13]; // should return false
// const numArray2 = [3, 3, 3, 3, 1, 1, 1, 1, 2, 10, 11, 12, 13, 'hi']; // test case
// const numArray3 = [3, 4, 5, 5, 8]; // should return true

// console.log(modemean(numArray));
// console.log(modemean(numArray2));
// console.log(modemean(numArray3));



module.exports = modemean;
