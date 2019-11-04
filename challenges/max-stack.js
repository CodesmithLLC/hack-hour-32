/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.store = {};
  this.index = 0;
}

Stack.prototype.push = function(val) {
  this.store[this.index++] = val;
  return this.index;
};

Stack.prototype.pop = function() {
  if (this.index === 0) return undefined;
  const removedElement = this.store[this.index - 1];
  delete this.store[--this.index]
  return removedElement;
}

Stack.prototype.getMax = function() {
  this.max = -Infinity;
  for (const key in this.store) {
    if (this.store[key] > this.max) this.max = this.store[key];
  }
  return this.max;
}

module.exports = Stack;