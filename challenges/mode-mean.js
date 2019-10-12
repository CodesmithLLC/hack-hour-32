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
  let mean = (array.reduce((acc, el) => {
    acc += el;
    return acc;
  })) / array.length;

  let obj = array.reduce((acc, el) => {
    if (!acc.hasOwnProperty(el)) {
      acc[el] = 1;
      return acc;
    }
    acc[el] += 1;
    return acc;
  }, {});
  
  console.log(obj)

  let mode = 0;
  for (let key in obj) {
    if (obj[key] > mode) {
      mode = obj[key];
    }
  }

  console.log(mean)
  if (mode === mean) {
    return true;
  }
  return false;
}

module.exports = modemean;
