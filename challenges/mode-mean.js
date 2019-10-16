/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 * Mode: The number that is repeated the most. >> [1, 2, 2, 3, 4, 5] >> 2
 * Mean: The average of the number set. >> [1, 2, 2, 3, 4, 5] >> 17/6
 * 
 */


function modemean(array) {
    //Find mode
    let mode = null;
    const countObj = {};
    for (let i = 0; i < array.length; i++) {
        if (countObj[array[i]]) {
            countObj[array[i]] += 1;
        } else {
            countObj[array[i]] = 1;
        }
    }
    console.log(countObj);
    let topNum = null;
    let topScore = null;
    for (let x in countObj) {
        if (topNum === null) {
            topNum = parseFloat(x);
            topScore = countObj[x]
        } else if (topScore <= countObj[x] && topNum < parseFloat(x)) {
            topNum = parseFloat(x);
            topScore = countObj[x];
        }
    }
    mode = topNum;


    //Find mean
    let mean = Math.floor((array.reduce((acc, curr) => acc += curr)) / array.length);


    //Compare mode to mean
    console.log('Mode >> ', mode, ' >> ', typeof mode, ',', 'Mean >> ', mean, ' >> ', typeof mean)
    return mode === mean;
}


console.log('Should be true, actual is >> ', modemean([1, 2, 2, 3]))




module.exports = modemean;
