/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {}
  this.highestIndex;
  this.length = 0
}

Stack.prototype.push = function (value) {
  // console.log('value in push is', value)
  this.storage[this.length++] = value
  if (this.highestIndex === undefined) {
    this.highestIndex = value
  } else if (this.highestIndex < value) {
    this.highestIndex = value
  }
  return this.length
}

Stack.prototype.pop = function  () {
  if (this.length === 0) return undefined
  let temp = this.length - 1
  this.length--
  delete this.storage[temp];
  return this.storage[temp]
}

Stack.prototype.getMax = function () {
  return this.highestIndex
}

let test = new Stack()

test.push(2)
test.push(10)
console.log(test.push(6))
console.log(test)
console.log(test.pop())
console.log(test)
console.log(test.getMax())

module.exports = Stack;