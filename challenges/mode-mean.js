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
  const counter = {};
  let total = 0;
  let max = 0;
  let most;

  // loop through array 
  array.forEach( item => {
	/*** MODE ***/
	// initialize key-vals
	if (counter[item] === undefined) counter[item] = 0;
	// increment counter key-vals
	counter[item] = counter[item] += 1;
	// set max
	if (counter[item] > max) {
	  max = counter[item];
	  most = item;
	}


	/*** MEAN ***/
	//increase counter
	total += item;
  });

  const average = Math.floor(total/array.length);

  console.log(average);
  console.log(most);
  if (average === most) return true;
  return false;

}



console.log('expect true. Got => ' + modemean([1,3,3,3,3,5]));
console.log('expect false. Got => ' + modemean([1,1,5]));

module.exports = modemean;
