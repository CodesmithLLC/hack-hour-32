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
    let arr = array.sort((a,b)=> a - b);
    let counts = {};
    let adds = 0;
    for(let i = 0; i < arr.length; i ++){
        adds += arr[i];
        if(!counts[arr[i]])
            counts[arr[i]] = 1;
        else 
            counts[arr[i]]++;
    }
    let meanCounts = counts[adds / arr.length];
    if(!meanCounts)
        return false;
    let keys = Object.keys(counts);
    for(let j = 0; j < keys.length; j++){
        if(counts[keys[j]] > meanCounts)
            return false;
    }
    return true;
}



module.exports = modemean;
