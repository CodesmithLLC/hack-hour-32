/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.size = 0;
  this.store = {}
}
// push
Stack.prototype.push = function (value) {
  // return incremented length
  let i = this.size;
  this.store[i] = value;
  this.size += 1;
  return this.size;
}
// pop
Stack.prototype.pop = function () {
  // return removed element 
  let i = this.size, temp = this.store[i - 1];

  delete this.store[i - 1];
  i -= 1;
  return temp;

}

// getMax
Stack.prototype.getMax = function () {
  // find largest value and return it

  // if empty stack
  if (this.size === 0) return;
  else { // if not empty
    let max = this.store[key]; // start from last value
    let key = this.size;
    // loop over store obj
    for (let i in this.store) {
      if (this.store[i] > max) { // if first ele > max, reassign max 
        max = this.store[i];
      } else if (max > this.store[i]) { // if max is greater than current value
        max = this.store[key];  // keep max
      }
      key = this.size - 1; // decrement index and compare again
    }
    return max;
  }
}

module.exports = Stack;