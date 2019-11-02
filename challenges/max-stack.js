/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(...args) {
  args.forEach(arg => this.storage[this.length++] = arg)
  return this.length;
}

Stack.prototype.pop = function() {
  const popped = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return popped;
}

Stack.prototype.getMax = function() {
  const obj = this.storage;
  Object.values(obj).sort((a,b) => b - a);
  return obj[this.length - 1]
}

var arr = new Stack()

arr.push(1)
arr.push(2)
arr.push(3)
console.log(arr)
console.log(arr.getMax())

arr.pop()
console.log(arr)

module.exports = Stack;