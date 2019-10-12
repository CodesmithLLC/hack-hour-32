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
    let sum = array.reduce((acc, cur) => acc+cur)
    console.log(sum)
    let sorted = array.sort((a, b) => a - b)
    console.log(sorted)
    console.log(sorted.length)
    let cache = {}
    for (let element of sorted) {
        if (cache[element]) {
            cache[element]++
        } else {
            cache[element] = 1
        }

    }
    console.log(cache)
    let valuesOnly = Object.values(cache)
    console.log(valuesOnly)
    let highest = valuesOnly.reduce((acc, cur) => {
        console.log(acc)
        console.log(cur)
        if (acc < cur) { 
            acc = cur;
            return acc
        } else {
            return acc;
        }
    })
    console.log(highest)
    let mode
    for (let key in cache) {
        if (cache[key] === highest) mode = key
    }

    console.log(mode)



    

    let mean = sum / array.length
    console.log(mean)

}

console.log(modemean([1,2,3,6,3,3,3,7,3,2,4,1]))

module.exports = modemean;
