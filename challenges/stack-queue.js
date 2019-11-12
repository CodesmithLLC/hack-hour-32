/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = {};
    this.index = 0;
}

Stack.prototype.push = function(value) {
    this.storage[this.index] = value;
    return ++this.index;
}
  
Stack.prototype.pop = function() {
    this.index--;
    let temp = this.storage[this.index];
    delete this.storage[this.index];
    return temp;
}


/**
* Queue Class
*/


function Queue() {
    this.stack1 = new Stack;
    this.stack2 = new Stack;
    this.length = this.stack1.index + this.stack2.index;
}

Queue.prototype.enqueue = function(value) {
    this.stack1.push(value);
    if (this.stack2.index === 0) {
        while (this.stack1.index > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.length;
}

Queue.prototype.dequeue = function() {
    const temp = this.stack2.pop()
    if (this.stack2.index === 0) {
        while (this.stack1.index > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return temp;
}

const myQ = new Queue;
myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
myQ.enqueue(4);
console.log(myQ);

myQ.dequeue();
console.log(myQ)

module.exports = {Stack: Stack, Queue: Queue};
