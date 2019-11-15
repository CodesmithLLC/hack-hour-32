/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  (this.storage = {}), (this.index = 0);
}

// Stack.prototype.push = function (value) {
//     this.storage[this.index] = value;
//     this.index++;
//     return this.index;
// };

// Stack.prototype.pop = function () {
//     if (this.index <= 0) return undefined;
//     let popped = this.storage[this.index - 1];
//     delete this.storage[this.index - 1];
//     this.index--;
//     return popped;
// };

let stack1 = new Stack();
let stack2 = new Stack();

/**
 * Queue Class
 */

function Queue() {
  this.storage = {};
  this.index = 0;
  this.firstItem = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

// Queue.prototype.dequeue = function () {
//     if (this.index === 0) {
//         return undefined;
//     }

//     let firstElement = this.storage[Object.keys(this.storage)[0]];
//     delete this.storage[Object.keys(this.storage)[0]];
//     this.index--;
//     return firstElement;
// };

Queue.enqueue(stack1);
Queue.enqueue(stack2);

module.exports = { Stack: Stack, Queue: Queue };
