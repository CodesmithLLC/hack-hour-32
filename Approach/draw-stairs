 
/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******
*/

//Solution 1 - With helper function
function makeSpaceArray(x) {
    const str = [];
    for (var i = 0; i < x; i++) {
      str.push(' ');
    }
    return str;
  }
  
function drawStairsHelper(n) {
    const arr = makeSpaceArray(n);
    while (n > 0) {
        arr[--n] = '*';
        console.log(arr.join(''));
    }
}


//Solution 2 - optimized for space/time complexity
function drawStairs(n) {
    for (let i = 1; i <= n; i++) {
      const spaces = ' '.repeat(n - i);
      const stars = '*'.repeat(i);
      console.log(spaces + stars);
    }
  }