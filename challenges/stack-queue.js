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
    return result;
}

module.exports = {Stack: Stack, Queue: Queue};
