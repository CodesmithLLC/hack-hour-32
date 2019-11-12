/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.store = {}
    this.index = 0;
}
Stack.prototype.push = function (item) {
    this.store[++this.index] = item;
}
Stack.prototype.pop = function () {
    if (this.index === 0) return undefined;
    let last = this.storage[this.index - 1]
    this.store[this.index - 1] = undefined;
    this.index--;
    return last;
}

/**
* Queue Class
*/

function Queue() {
    // this.storage = []; this.index =0
    this.s1 = new Stack(); // in
    this.s2 = new Stack(); // out
    this.length = 0
}

Queue.prototype.enqueue = function (val) {
    // add item to front
    this.s1.store[this.s1.index++] = val;
}
Queue.prototype.dequeue = function () {
    if (this.length === 0) return undefined;

    //const s1b = Object.assign({}, this.s1)
    //If s2 is empty, refill it by popping each element from s1 and pushing it onto s2
    //console.log(`s1b `, s1b)
    // Pop and return the top element from s2
    while (!this.s.k1eys().length === 0) { // while s1 is not empty
        let item = this.s1b.pop();
        this.s2.push(item)
    }
    console.log(`S2: `, this.s2)
    //console.log(`s1: `, this.s1, `this.s2: `, this.s2)
    let returned = this.s2.pop();
    //console.log(`returned `, returned)
    return returned;
}


// const q = new Queue();
// q.enqueue('A')

// //console.log(q)
// q.enqueue('B')
// q.enqueue('C')
// q.enqueue(1)
// console.log(q)
// console.log(`dequeue: `, q.dequeue())
// console.log(`dequeued: `, q)
module.exports = { Stack: Stack, Queue: Queue };
