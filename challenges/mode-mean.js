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
  // Get sum of elements of array
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // Get mean of array
  console.log(sum);
  console.log(array.length);
  let mean = sum / array.length;
  console.log(mean);
  mean = Math.floor(mean);
  console.log(mean);

  // Put all key value pairs inside mode
  // where key is the value from the array
  // and value is the number of occurences in the array
  let modeHolder = {};

  for (let i = 0; i < array.length; i++) {
    // modeHolder.hasOwnProperty(modeHolder[array[i]])
    modeHolder[array[i]];

    if (modeHolder[array[i]]) {
      modeHolder[array[i]] += 1;
    } else {
      modeHolder[array[i]] = 1;
    }
  }

  console.log(modeHolder);

  // 0th index is key
  // 1st index is value
  let mode = [];

  // elem is key
  // mode[key] is value
  for (let elem in modeHolder) {
    // Check if the current max is empty
    // If yes, push first key value pair
    if (mode.length === 0) {
      mode[0] = elem;
      mode[1] = modeHolder[elem];
    } else {
      // If the current value is greater than saved Max value
      // Replace the current max
      if (modeHolder[elem] > mode[1]) {
        mode[0] = elem;
        mode[1] = modeHolder[elem];
      }
      // If the values are the same
      // Check which key is higher then replace
      else if (modeHolder[elem] === mode[1]) {
        if (elem > mode[0]) mode[0] = elem;
      }
    }
  }

  // Key in mode is the value
  console.log(mode);
  console.log(mode[0]);

  console.log(mean);

  console.log(typeof Number(mode[0]));
  console.log(!isNaN(mode[0]));
  console.log(!isNaN(mean));

  console.log(mean === Number(mode[0]));

  if (Number(mode[0]) === mean) return true;
  else return false;
}

console.log(modemean([10, 4, 4, 4, 4, 6, 6, 6, 6, 6, 10]));

console.log(modemean([1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 7, 8]));

// console.log(
//   modemean([
//     1,
//     1,
//     1,
//     1,
//     1,
//     1,
//     1,
//     1,
//     2,
//     2,
//     2,
//     2,
//     2,
//     2,
//     2,
//     2,
//     3,
//     3,
//     3,
//     3,
//     3,
//     3,
//     3,
//     3
//   ])
// );

// let checker = [];

// if(mode.length === 0 && checker.length === 0) {
//   mode[0] = array[0];
//   mode[1] = 1;
// }
// else {
//   if()
// }

// checker[array[i]] = checker[array[i]] += 1

module.exports = modemean;
