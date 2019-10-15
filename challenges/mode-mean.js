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
  let modeCalc = input => {
    let counter,
      maxNumber = 0,
      maxNumberChecker = [];
    for (let i = 0; i < input.length; i++) {
      let number = input[i];
      counter[number] += 1;
      if (counter[number] > maxNumber) {
        maxNumber = counter[number];
        maxNumberChecker.push(maxNumber);
      }
    }
    return Math.max(maxNumberChecker);
  };
  let meanCalc = input => {
    Math.floor(input.reduce((a, b) => a + b, 0) / input.length);
  };
  return modeCalc(array) === meanCalc(array);
}

module.exports = modemean;
