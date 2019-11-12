/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.count = 0;
    this.storage = {}
}
Stack.prototype.push = function(value){
    this.storage[this.count] = value;
    this.count++;
}
Stack.prototype.pop = function(){
    if(this.count === 0){
        return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}
Stack.prototype.size = function(){
    return this.count;
}


/**
* Queue Class
*/


function Queue() {
this.push = new Stack();
this.pop = new Stack();
}

Queue.prototype.enqueue = function (val) {
this.push.push(val);
};

Queue.prototype.dequeue = function () {
let poping = this.pop;
let pushing = this.push;

if (poping.top) {
  let deq = poping.pop();
  console.log('Dequeing ' + deq + ' from stack.');
  return deq;
}

while (pushing.top) {
  poping.push(pushing.pop());
}
}



module.exports = {Stack: Stack, Queue: Queue};
