/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.obj = {};
  this.index = 0;

  this.prototype.push = function (value) {
    this.object.index ++;
    this.object.index = value;
    return this.object.length;
  }

  this.prototype.pop = function (value) {
    //create a storage variable
    let storage = value;
    //delete that value
    delete Math.max(this.obj.index)
    //return storage
    return storage;
  }

  this.prototype.getMax = function () {
    //reference the last key 
    let last = Object.keys(this.obj)[Object.keys(this.obj).length-1];
    //return the last index
    return last;
  }
}

module.exports = Stack;