/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.length = 0;
  this.storage = {};
}

Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
  return this.length;
};

Stack.prototype.pop = function() {
  if (this.length <= 0) return undefined;
  let poppedVal = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return poppedVal;
};

Stack.prototype.getMax = function() {
  let largestVal = this.storage[0];
  for (let i = 0; i < this.length; i++) {
    if (this.storage[i] > largestVal) {
      largestVal = this.storage[i];
    }
  }
  return largestVal;
};
module.exports = Stack;
