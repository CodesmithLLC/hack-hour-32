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
  this.stack = {};
  this.max = [];
}

Stack.prototype.push = function(val)  {
  this.stack[this.length] = val;
  this.length++;
  this.max.push(val);
  this.max = this.max.sort();

  return this.length;

}

Stack.prototype.pop = function()  {
  const popVal = this.stack[this.length-1]
  delete this.stack[this.length-1]
  this.length--;
  const index = this.max.indexOf(popVal);
  this.max.splice(index, 1);

  return popVal;

}

Stack.prototype.getMax = function() {
  return this.max[this.max.length-1];
}


let newStack = new Stack;

console.log(newStack.push(0));
console.log(newStack.push(28));
console.log(newStack.push(21));
console.log(newStack.push(40));
console.log(newStack.pop());
console.log(newStack.getMax());

module.exports = Stack;
