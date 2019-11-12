/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  // Stack LIFO
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length++;

  return this.length;
}

Stack.prototype.pop = function() {
  if (this.length = 0) return undefined;

  this.length--;
  const poppedItem = this.storage[this.length];
  delete this.storage[this.length];

  return poppedItem;
}

/**
* Queue Class
*/


function Queue() {
  // Queue FIFO
  this.storage = {};
  this.length = 0;
  this.start = 0;
}

Queue.prototype.enqueue = function(val) {
  this.storage[this.length] = val;
  this.length++;

  return this.length;
}

Queue.prototype.dequeue = function() {


  if (this.length === 0) return undefined;

  const deletedItem = this.storage[this.start];
  delete this.storage[this.start];
  this.start++;
  this.length--;

  return deletedItem;
}


/*** STACK TEST ***/
/*
const stack = new Stack;
console.log( stack.push(1) );
console.log( stack.push(2) );
console.log( stack.pop() );
console.log( stack.length );

*/

/*** QUEUE TEST ***/
/*
const queue = new Queue;
console.log( queue.enqueue(20) );
console.log( queue.enqueue(21) );
console.log( queue.dequeue() );
console.log( queue.dequeue() );
console.log( queue.dequeue() );
console.log( queue.length );
*/


module.exports = {Stack: Stack, Queue: Queue};
