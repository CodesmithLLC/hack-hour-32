/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.length = 0
  this.max = [];
}
//push
Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length ++;
  for (let i = 0; i < this.max.length; i ++) {
    if (this.max[i] > val) {
      splice(i, 0, val);
      return this.length;
    }
    if (this.max[i + 1] === undefined) {
      this.max[this.max.length] = val;
      return this.length
    }
  }
}
//pop
Stack.prototype.pop = function() {
  const popped = this.storage[this.length - 1]
  delete this.storage[this.length - 1];
  this.length --;
  this.max.pop();
  return popped;
}

//getmax
Stack.prototype.getMax = function() {
  if (this.length === 0) {
    return "there is no maximum value in an empty stack"
  }
  return this.max[this.max.length - 1]
}
module.exports = Stack;