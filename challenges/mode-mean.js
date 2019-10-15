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
    let mode;
    for (let i = 0; i < array.length; i++) {
        mean += array[i];
        mean / (array.length);
    }

    let obj = array.reduce(function (acc, curr, i) {
        mean += curr / (i + 1);
        if (acc[curr] === undefined) {
            acc[curr] = 1;
        } else {
            acc[curr]++;
        }
        return acc;
    }, {});

    for (let key in obj) {
        let highestVal = 0;
        if (highestVal < obj[key]) {
            mode = Math.max(key);
        }
    }
    console.log(obj);

    console.log("this is the mean  >> " + Math.floor(mean));
    console.log("this is the mode  >> " + mode);
    if (mode === Math.floor(mean)) {
        return true;
    } else {
        return false;
    }
}

module.exports = modemean;


