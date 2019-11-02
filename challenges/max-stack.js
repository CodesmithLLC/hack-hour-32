/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.indexLength = 0;
  this.getMax = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.indexLength] = value;
  // console.log(this.storage)
  this.indexLength++;

//if value is > than the other values >> assign it to get max
if (value > this.getMax) {
  this.getMax = value;
  console.log('Get Max:', this.getMax)
  } 

  return this.indexLength
}

Stack.prototype.pop = function() {
  let temp = this.storage[this.indexLength-1] 
  delete this.storage[this.indexLength-1] 
  if (this.getMax === temp) {
    const maxArray = Object.values(this.storage).sort();
    maxArray.pop();
    this.getMax = maxArray[maxArray.length-1]
    console.log('maxArray', maxArray, 'New get max', this.getMax)
  }
  this.indexLength--;
  return temp
}

const pushTest = new Stack();
console.log('Length',pushTest.push(4))
console.log('Length',pushTest.push(5))
console.log('Length',pushTest.push(6))
console.log('Length',pushTest.push(2))
console.log('Length',pushTest.push(1))
console.log('Length',pushTest.push(6))
console.log('Pop',pushTest.pop())

module.exports = Stack;