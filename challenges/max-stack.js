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
  this.length = 0;

  Stack.prototype.push = function (value) {
    // this.max = this.obj[this.length]
    this.object[this.length] = value;
    this.length+=1;
    return this.length;
  }

  Stack.prototype.pop = function (value) {
    //create a storage variable
    let storage = value;
    //delete that value
    delete this.obj[this.length-1]
    //return storage
    return storage;
  }

  Stack.prototype.getMax = function () {
    let max = 0;
    for (let i = 0; i < this.length; i++) {
      if (this.obj[i] > this.obj[max]) {
        max = this.obj[i];
      }
    }
    return max;
  }
}

module.exports = Stack;