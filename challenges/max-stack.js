/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.contents = {};
  this.max;
}

Stack.prototype.push = function (value) {
  const length = (Object.keys(this.contents).length);
  this.contents[length] = value;
  this.max = this.max > value ? this.max : value;
  return length + 1;
};

Stack.prototype.pop = function () {
  const length = (Object.keys(this.contents).length) - 1;
  const returnValue = this.contents[length];
  delete this.contents[length];
  return length;
}

Stack.prototype.getMax = function() {
  return this.max;
}

const newStack = new Stack();

module.exports = Stack;