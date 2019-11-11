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
//an array of arrays is a 2d array
//let result=[];
//i,j ---> 
for(let i=0;i<n;i++){ //only swap half the array
    //let subResult=[];
    // let row=grid[i];
    for(let j=0;j<n/2;j++){
        let temp=grid[i][j]; //not 1:1
        grid[i][j]=grid[j][n-1-i];
        grid[j][n-1-i]=temp;
         console.log(grid);
          
         console.log(grid);
    }
    console.log(grid);
}

          
return grid;
}


console.log(rotateGrid([[1, 2, 3],[4, 5, 6], [7, 8, 9]],3));
module.exports = rotateGrid;
