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
  // calculate mean as the sum of all elements divided by length
  const sum = array.reduce((acc, cv) => {
    acc += cv;
    return acc;
    })
  const mean = Math.floor(sum / array.length)
  console.log(mean)
  // calculate mode as the number that occurs the most frequently 
  // create a cache to store all numbers 
  const modeCache = array.reduce((obj, ele) => {
    if (!obj[ele]) {
      obj[ele] = 1;
    } else {
      obj[ele]++;
    } return obj;
  }, {})
  console.log(modeCache)
  const modeFreq = Math.max(...Object.values(modeCache));
  console.log(modeFreq)
  const modeArr = [];
  for (let key in modeCache) {
    if (modeCache[key] === modeFreq) {
      modeArr.push(key)
    }
  }
  console.log(modeArr)
  const mode = Math.max(...modeArr);
  console.log(mode)
  if (mode === mean) {
    return true;
  } else {
    return false;
  }
}

console.log(modemean([1, 1, 2, 3, 3, 4, 4, 5]))


module.exports = modemean;
