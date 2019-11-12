/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    let output = [];
    return output;
}


/**
* Queue Class
*/


function Queue() {
    let result = Stack().concat(Stack());
    result.enqueue = result.push;
    result.dequeue = result.shift;
    return result;
}

const test = Queue();

test.enqueue(7);

console.log(test)

module.exports = {Stack: Stack, Queue: Queue};
