/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// the Stack constructor --> only want to keep track of the length of the array and the storage
function Stack() {
  // body...
  this.length = 0;
  this.storage = {};
}

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length ++;
  return this.length;
}

Stack.prototype.pop = function() {
  // remove the value from the last key value pair from the this.storage 
  if(this.length === 0) return undefined;
  let toBeDeletedAndReturned = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  // pop changes the length of the original array
  this.length --;
  return toBeDeletedAndReturned;
}

Stack.prototype.max = function() {
  let valsArr = Object.values(this.storage);
  // console.log(Math.max(...valsArr));
  return Math.max(valsArr);
}

let test = new Stack ();
test.push(3);
test.push(4);
test.push(5);
test.push(6);
test.pop();
test.max();
console.log(test)
module.exports = Stack;