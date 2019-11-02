/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.length = 0;
  this.arr = {};
  this.max = -Infinity;
}

Stack.prototype.push = function(val){
  if(val === undefined) return;
  this.arr[this.length] = val;
  this.length ++;
  if(this.max < val)
    this.max = val;
  return;
}

Stack.prototype.pop = function(){
  if(this.length <= 0) return;
  let returnVal = this.arr[this.length - 1];
  delete this.arr[this.length - 1];
  this.length -= 1;
  if(returnVal === this.max){
    this.max = -Infinity;
    for(let  i = 0; i < this.length; i ++){
      this.max = Math.max(this.max, this.arr[i]);
    }
  }
  return returnVal;
}

Stack.prototype.getMax = function(){
  return this.length === 0 ? undefined : this.max;
}

let a = new Stack();
console.log(a.getMax());
a.push();
a.push(110);
a.push(110);
console.log(a.getMax());
a.pop();
console.log(a.getMax());
a.pop();
console.log(a.getMax());
// // a.push(110);
// // a.push(10);
// // a.push(7);
// // a.push(23);
// // a.push(0);
// // console.log(a.pop());
// // console.log(a.length);
// // console.log(a.pop());
// // console.log(a.length);
// // console.log(a.pop());
// // console.log(a.length);
// // console.log(a.pop());
// // console.log(a.length);
// // console.log(a.pop());
// // console.log(a.length);
// // console.log(a.pop());
// // console.log(a.length);
// a.push(10);
// a.push(7);
// a.push(23);
// a.push(110);
// a.push(0);
// console.log(a.getMax());
// console.log(a.pop());
// console.log(a.getMax());
// console.log(a.pop());
// console.log(a.getMax());
// console.log(a.pop());
// console.log(a.getMax());
// console.log(a.pop());
// console.log(a.getMax());
// console.log(a.pop());
// console.log(a.getMax());
// console.log(a.pop());
// console.log(a.getMax());



module.exports = Stack;