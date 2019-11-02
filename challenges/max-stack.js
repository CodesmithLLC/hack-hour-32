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
  this.length = 0;
  this.max;
}

Stack.prototype.push = function (...values) {
  values.forEach(value => {
    this.contents[this.length] = value;
    this.max = this.max > this.contents ? this.max : value;
    this.length = this.length + 1;
  });
  return this.length;
};

Stack.prototype.pop = function () {
  this.length = this.length - 1;
  const returnValue = this.contents[this.length];
  delete this.contents[this.length];
  if (returnValue === this.max) {
  	this.max = -Infinity;
  	for (let key in this.contents) {
  		this.max = this.max > this.contents[key] ? this.max : this.contents[key];
  	}
  }
  return returnValue;
}

Stack.prototype.getMax = function() {
  return this.max;
}

module.exports = Stack;