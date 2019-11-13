/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  // need to clear out ( reassign temp arr after every n elements);
  let tempArr = [];
  const holdArr = [];
  //get the first element of every array. Starting from the last array. push these three into an array. push that array into an array.
  //get the second element of every array. push these three into an array. push that array into an array.
  //get the third element of every array. push these three into an array. push that array into an array.

  for (let j = 0; j < n; j += 1) {
    for (let i = n; i > 0; i -= 1) {
      tempArr.push(grid[i - 1][j]);
    }
    holdArr.push(tempArr);
    tempArr = [];
  }
  console.log(tempArr);
  console.log(holdArr);
  return holdArr;
}

console.log(rotateGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3));
module.exports = rotateGrid;
