/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.obj = {};
  this.length = 0;
  this.largestNum = 0;
}
  //push
  Stack.prototype.push = (value) => {
    this.obj[this.length] = value;
    this.length += 1;
    return this.length;
  }
  //pop
  Stack.prototype.pop = () =>{
    if (this.length === 0) return undefined;
    let lastElement = this.obj[this.length-1];
    delete this.obj[this.length-1];
    return lastElement;
  }
  //getMax
  Stack.prototype.getMax = () =>{
    for (let i=0; i<this.length; i++){
      if (this.obj[i]> this.largestNum){
        this.largestNum = this.obj[i];
      }
    }
    return this.largestNum;
  }

module.exports = Stack;