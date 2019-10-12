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

// sort array
// const nums = [1,0,10,2,10,2,-1,-1,100, 100, 10, 100, 1000,1000,1000] // mode: appears most often
// 3 modes: 1000 > 100, 10
const num2 = [7, 7, 7, 7, 7, 7, 7]

function findMode(arr) {
    const counts = {};
    // iterate over array
    for (let num of arr) {
        if (counts[num] === undefined) { // if key is not in counts, set value = 0; 
            //console.log(counts[num])
            counts[num] = 1;
        } else if (counts[num]) {
            counts[num] += 1;
        }
        // else increment count of each num 
    }
    // console.log(counts)
    // this is an array of numbers sorted by their counts, if counts are the same, larger num appears after 
    // smaller num, so the last element will be the larger mode
    const sortedKeysByValue = Object.keys(counts).sort((a, b) => { return counts[a] - counts[b] });
    // console.log('sorted keys by value ', sortedKeysByValue);
    // console.log('max mode: ', sortedKeysByValue[sortedKeysByValue.length-1]);
    return sortedKeysByValue[sortedKeysByValue.length - 1];
}

//console.log(findMode(nums));
console.log(findMode(num2)) // 2, most common
// find average
function findMean(arr) {
    let sum = arr.reduce((total, n) => {
        total += n;
        return total;
    }, 0);
    const mean = sum / arr.length;
    console.log('average: ', Math.floor(mean))
    return Math.floor(mean);  // floored mean
}

//findMean(nums);
findMode(num2) // 2

function modemean(array) {
    // return if mode === mean
    const mean = findMean(array);
    const maxMode = Number(findMode(array));
    console.log('mean: ', mean + ' and mode: ', maxMode);
    //console.log(maxMode)
    console.log(typeof maxMode)
    return mean === maxMode;
}

console.log(modemean(num2))

module.exports = modemean;
