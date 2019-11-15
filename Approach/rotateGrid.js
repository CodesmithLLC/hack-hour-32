// O(n^2) time, O(n) space
function rotateGrid(grid, n) {
  // initialize the new grid
  const col = [];
  // iterate through the 
  for (let i = 0; i < n; i++){
    // initialize the new row
      const row = [];
      for(let j = 0; j < n; j++){
        // swap column and rows (i with j)
        // here j is moving through rows, while i is holding the column
          row.push(grid[j][i]);
      }
      // push the reversed row to the new grid
      col.push(row.reverse());
  }
  // return the new grid
  return col;
}

// O(n^2) time, O(n) space --> another way to transpose and reverse
function rotateGrid2(matrix){
  const a = matrix[0].map((col, i) => {
    return matrix.map(row => row[i]).reverse();
  });
  return a;
}


// O(n) time, O(1) space
function rotateGridInPlace(grid, n) {
  // loop through the amount of "rings" in the matrix
  for (let i = 0; i < Math.floor(n / 2); i ++) {
    // loop trhough the elements in the "ring" and swap them around
    for (let j = i; j < n-1-i; j ++) {
      let top = grid[i][j];
      // swap left -> top
      grid[i][j] = grid[n-1-j][i];
      // swap bottom -> left
      grid[n-1-j][i] = grid[n-1-i][n-1-j];
      // swap right -> bottom
      grid[n-1-i][n-1-j] = grid[j][n-1-i];
      // swap top -> right
      grid[j][n-1-i] = top;
    }
  }
  // return the rotated grid
  return grid;
}