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
    let answerm = array.reduce((a, b) => {return (a + b)});
    answerm = Math.floor(answerm/array.length)
    let modes = []
    let count = []
    let number
    let i
    let maxIndex = 0
    for(i = 0; i < array.length; i++){
        number = array[i];
        count[number] = (count[number] || 0) + 1;
        if(count[number] > maxIndex){
            maxIndex = count[number];
        }
    }
    for(i in count){
        if(count.hasOwnProperty(i)){
            if(count[i] === maxIndex){
                modes.push(Number(i));
            }
        }
    }
    let mode = Math.max(modes)
    if(mode === answerm){
        return true
    } else {
        return false
    }
}

module.exports = modemean;
