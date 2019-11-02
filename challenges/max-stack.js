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
  this.index = 0;
  this.max = null;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  if (this.max === null) {
    this.max = value;
  } else if (this.max < value) {
    this.max = value;
  }
  return ++this.index;
}

Stack.prototype.pop = function() {
  this.index--;
  let temp = this.storage[this.index];
  delete this.storage[this.index];
  if (temp === this.max) {
    this.max = null;
    for (let x in this.storage) {
      if (this.max === null) {
        this.max = this.storage[x];
      } else if (this.max < this.storage[x]) {
        this.max = this.storage[x];
      }
    }
  }
  return temp;
}

Stack.prototype.getMax = function() {
  return this.max;
}


const myStack = new Stack;

myStack.push(15000);
myStack.push(10);
console.log(myStack.push(20));
console.log(myStack.pop());

console.log(myStack)
console.log(myStack.getMax());

module.exports = Stack;