/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.store = {};
  this.index = 0;
  this.push = function(value) {
    this.store[index++] = value;
  }
  this.pop = function() {
    const poppedValue = this.store[this.index - 1];
    delete this.store[this.index - 1];
    this.index -= 1;
    return poppedValue;
  }
}


/**
* Queue Class
*/


function Queue() {
  const stack1 = new Stack();
  const stack2 = new Stack();

  this.enqueue = function(value) {
    stack1.push(value);
  }
  this.dequeue = function() {
    const dequeueValue = stack1[]
  }
}

module.exports = {Stack: Stack, Queue: Queue};
