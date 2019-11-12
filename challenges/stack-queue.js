/**
 * Create a stack.Then create a queue using two stacks.
 */

// last in first out
function Stack() {
    this.lastIn = null;
    this.length = 0;
}

function Node(data) {
    this.data = data;
    // for stack
    this.previous = null;
    // for queue
    this.next = null;
}

Stack.prototype.push = function(data) {
    let node = new Node(data);
    
    node.previous = this.top;
    this.lastIn = node;
    this.length++;

    return this.length;
}

Stack.prototype.pop = function() {
    let botStackFrame = this.lastIn;
    this.lastIn = lastIn.previous;
    this.length--

    return botStackFrame;
}

const stack1 = new Stack();
const stack2 = new Stack();
stack1.push(a)
stack2.push(a)
stack1.push(b)
stack2.push(b)
stack1.push(c)
stack2.push(c)

/**
* Queue Class
*/
// first in first out
function Queue() {
    this.first = null;
    this.length = 0;
}

Queue.prototype.enqueue = function(data) {
    let node = new Node(data);

    if (!this.first) {
        this.first = node;
    } else {
        let curNode = this.first;
        while (curNode.next) {
            curNode = curNode.next;
        }
        curNode.next = node;
    }

    this.length++;
    return this.length
}

Queue.prototype.dequeue = function(data) {
    let placeholder = this.first;
    this.first = this.first.next;
    this.length--;
    return placeholder;
}

Queue.enqueue(stack1);
Queue.enqueue(stack2);

module.exports = {Stack: Stack, Queue: Queue};
