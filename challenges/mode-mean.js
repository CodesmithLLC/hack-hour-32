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

  const mean = Math.floor((array.reduce((acc, next) => {
    return acc + next;
  }, 0)) / array.length);

  let mode;
  let count = 0;
  const cache = {};

  array.forEach((elem) => {
    if (!cache[elem]) {
      cache[elem] = 1;
    } else {
      cache[elem] += 1;
    }
  })

  for (let key in cache) {
    if (cache[key] > count) mode = key;
  }

  return mode === mean ? true : false;
}


module.exports = modemean;
