/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = {}
  this.max = -Infinity;
  this.index = 0;

}

Stack.prototype.pop = function(){
  let remove = this.stack[this.index];
  delete this.stack[this.index];
  this.index -= 1;
  return remove;
}
Stack.prototype.push = function(element){
  this.stack[this.index] = element;
  this.index += 1;
  if(element > this.max){
    this.max = element;
  }
  return this.index;

}
Stack.prototype.getMax = function(){
  return this.max
}
module.exports = Stack;