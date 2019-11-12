/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.last = 0;
}

Stack.prototype.push = function(val){
  this.storage[this.last] = val;
  this.last ++;
  return this.last;
}

Stack.prototype.isEmpty = function (){
  return this.last === 0;
}

Stack.prototype.pop = function(){
  if(this.last === 0) return;
  let returnVal = this.storage[--this.last];
  this.storage[this.last] = undefined;
  return returnVal;
}

/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enque = function(val){
  this.stack1.push(val);
}

Queue.prototype.dequeue = function () {
  if(this.stack1.isEmpty() && this.stack2.isEmpty()) return;
  if(!this.stack2.isEmpty()){
    return this.stack2.pop();
  }
  let returnVal;
  while(!this.stack1.isEmpty()){
    returnVal = this.stack1.pop();
    this.stack2.push(returnVal);
  }
  this.stack2.pop();
  return returnVal;
}

// let test = new Queue();
// test.push(1);
// test.push(2);
// test.push(3);
// test.push(5);
// test.push(4);
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());
// test.push(1);
// console.log(test.pop());
// test.push(2);
// test.push(3);
// test.push(5);
// test.push(4);
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());

module.exports = {Stack: Stack, Queue: Queue};
