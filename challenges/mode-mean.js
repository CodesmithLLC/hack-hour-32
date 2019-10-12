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
    let mean;
    let mode;
    mean = array.reduce((a, b) => {
        return a + b;
    });
    mean = Math.floor(mean / array.length);
    const modeTracker = array.reduce((tally, item) => {
        tally[item] = (tally[item] || 0) + 1;
        return tally;
    }, {});
    let count = Object.values(modeTracker);
    const modeValue = count.reduce((a, b) => {
        return Math.max(a, b);
    });
    let modeBank = Object.entries(modeTracker);
    const modeStore = [];
    for (let i = 0; i < modeBank.length; i += 1) {
        if (modeBank[i][1] === modeValue) {
            modeStore.push(modeBank[i][0]);
        }
    };
    mode = modeStore.reduce((a, b) => {
        return Math.max(a, b);
    });
    mode = Number(mode);
    if (mean === mode) {
        return true;
    } else {
        return false;
    }
}


module.exports = modemean;
