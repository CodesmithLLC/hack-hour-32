
/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 * // example: myArray = [1, 2, 3, 3, 4]
// mode => 3
// mean => Math.floor(13/5) => 2
 */

function mean(array) {
  var sum = array.reduce(function(sum, el) {
    return sum + el;
  });
  return Math.floor(sum / array.length);
}

function mode(array) {
  const count = {};
  array.forEach(function(num) {
    if (num in count) {
      return count[num]++;
    }
    count[num] = 1;
  });
  let max = -Infinity;
  let modeCandidates;
// console.log(count)
  for (let num in count) {
    if (count[num] > max) {
      // console.log(`Bingo- found a candidate.`)
      modeCandidates = [num];
      // console.log(modeCandidates)
      max = count[num];
    } else if (count[num] === max) {
      modeCandidates.push(num);
    }
  }
  // console.log(modeCandidates);
  return Math.max(modeCandidates);
}

function modemean(array) {
  return mean(array) === mode(array);
}

