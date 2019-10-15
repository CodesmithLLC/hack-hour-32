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
    let countObj = array.reduce((countObj, current) => {
        if(!countObj[current]){
            countObj[current] = 1;
        }
        else{ countObj[current]++ }
        return countObj
    }, {});

    let mode = 0;

    for(var x in countObj){
        if(countObj[x] >= mode && x > mode){ mode = x }
    }

    let mean = Math.floor(array.reduce((acc, current) => {
        return acc += current
    }) / array.length)

    return mode == mean;
}

module.exports = modemean;
