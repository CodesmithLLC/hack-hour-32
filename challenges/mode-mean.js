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
function mode(array) {
    //count the number of appearances of every item
    const counter = {};
    for (let i = 0; i < array.length; i ++) {
        if(counter[array[i]] === undefined) {
            counter[array[i]] = 0;
        }
        counter[array[i]] ++;
    }
    //compare the number of appearances of every item
    let modeNumber = 1;
    let mode = [];
    for (let key in counter) {
        if (counter[key] > modeNumber) {
            modeNumber = counter[key];
            mode = [key];
        }
        //if there are multiple items that appear the same number of times
        //be abe to compare the items and return the larger one
        if (counter[key] === modeNumber) {
            mode.push(key)
        }
    }
    //return the item that appears the most, or the larger of the ones that appear the most
        return mode.reduce(function(max, current) {
            if (max < current) {
                return current;
            }
            if (max > current) {
                return max;
            }
            return max
        }
        )

}

    
function mean(array) {
    const sum = array.reduce(function (acc, el) {
        return acc+ el
    })
    return Math.floor(sum / array.length)
}
    return parseInt(mode(array)) === mean(array) ? true : false;
}

module.exports = modemean;
