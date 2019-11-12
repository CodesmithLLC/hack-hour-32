/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
this.storage = {};
this.length = 0;

}

Stack.prototype.push = function (val) {
    this.storage[this.length] = val;
    this.length++
    return this.length;
}

Stack.prototype.pop = function () {
    const temp = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return temp;
}

/**
* Queue Class
*/


function Queue() {
    this.stack1 = new Stack
    this.stack2 = new Stack
    this.length = 0;
}

Queue.prototype.enqueue = function (val) {
    if (this.stack2.length === 0) {
        this.stack2.push(val)
    } else {
        this.stack1.push(val)
    }
    this.length++;
    return this.length;
}

Queue.prototype.dequeue = function () {
    const temp = this.stack2.pop()
    if (this.stack2.length === 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    this.length--;
    return temp;
}

module.exports = {Stack: Stack, Queue: Queue};
