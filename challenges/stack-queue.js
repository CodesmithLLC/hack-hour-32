/**
 * Create a stack. Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.index] = val;
  this.index += 1;

  return this.index;
}

Stack.prototype.pop = function() {
  const temp = this.storage[this.index - 1]
  delete this.storage[this.index - 1];
  this.index -= 1;

  return temp;
}


/**
* Queue Class
*/

function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(val) {
  this.stack1.push(val);
}

Queue.prototype.dequeue = function() {
  if (this.stack2.index === 0) {
    for (let i = -this.stack1.index; i < this.stack1.index; i += 1) {
      const temp = this.stack1.pop();
      this.stack2.push(temp)
    }
    return this.stack2.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
