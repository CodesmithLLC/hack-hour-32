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
  // Mean
  const sum = array.reduce((acc, curr) => acc + curr);
  const avg = Math.floor(sum / array.length);

  // Mode
  let modeValue = null;
  let modeCount = 0;
  let currNum = null;
  let counter = 1;

  for (let i = 0; i < array.length; i += 1) {
    currNum = array[i];
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] === array[j]) counter += 1;
      console.log('CURRENT NUM ', currNum, 'COUNTER ', counter, 'CURR MODE ', modeValue);
    }
    if (counter > modeCount) {
      modeValue = currNum;
      modeCount = counter;
    }
    else if (counter === modeCount) {
      if (currNum > modeValue) {
        modeValue = currNum;
      }
    }
    counter = 1;
  }

  // Compare Mean to Mode
  return avg === modeValue ? true : false;
}

module.exports = modemean;
