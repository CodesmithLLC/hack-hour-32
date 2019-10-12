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

  // loop through array 
  array.forEach( item => {
	/*** MODE ***/
	// initialize key-vals
	if (counter[item] === undefined) counter[item] = 0;
	// increment counter key-vals
	counter[item] = counter[item] += 1;
	// set max
	if (counter[item] > max) max = counter[item];

	/*** MEAN ***/
	//increase counter
	total += item;
  });

  const average = total/array.length;

  if (Math.floor(average) === max) return true;
  return false;

}


//console.log('expect true. Got => ' + modemean([1,2,2,3]));
//console.log('expect false. Got => ' + modemean([1,1,2,3]));


module.exports = modemean;
