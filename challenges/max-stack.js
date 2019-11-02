/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

 // last in first out
function Stack() {
  // body...
  this.top = null;
  this.length = 0;
  this.max = -Infinity;
}

function Node(data) {
  this.data = data;
  this.previous = null;
}

Stack.prototype.push = function(data) {
  // create the node that will be pushed onto the call stack
  let node = new Node(data);
  if (typeof data === 'number' && data > this.max) this.max = data;
  //  assign current node's node.previous pointer to this.top, which will all previously made nodes (line 30)
  // the previously made node is the prior pushed stack of the call stack, with all prior node's held in its this.previous
  node.previous = this.top;
  // set this.top to be the current node, so that the next time, it can be assigned to the new node's node.previous
  this.top = node;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function(data) {
  // save the stack last pushed in as a temp variable since we need to return it
  const botStackFrame = this.top;
  // re-assign the this.top pointer to the removed node's this.previous, which holds all prior stacks
  this.top = botStackFrame.previous;
  this.length--;
  return botStackFrame;
}

Stack.prototype.getMax = function(data) {
  return this.max;
}

// const newStack = new Stack;
// newStack.push(1);
// newStack.push(2);
// newStack.push(100);
// newStack.push(3);
// newStack.push(4);
// console.log(newStack);
// newStack.pop();
// console.log(newStack);
// console.log(newStack.getMax());



module.exports = Stack;