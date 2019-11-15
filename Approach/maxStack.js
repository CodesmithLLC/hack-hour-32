function Stack() {
  this.length = 0
  this.store = {}
  this.max = {
    idx: -1,
    val: Number.NEGATIVE_INFINITY
  }
}

Stack.prototype.setNewMax = function () {
  // loop through the store
  for (let i in this.store) {
    // if the current value is greater than max value
    if (this.store[i] > this.max.val) {
      // set the new max
      this.max.val = this.store[i]
      // save the curent max index
      this.max.idx = i
    }
  }
}

Stack.prototype.resetMax = function () {
  // reset max to initial values
  this.max.val = Number.NEGATIVE_INFINITY
  this.max.idx = -1
  return
}

Stack.prototype.push = function (num) {
  // if new element is greater than max value
  if (num > this.max.val) {
    // save the index to the last index in the store
    this.max.idx = this.length
    // update new max value
    this.max.val = num
  }
  // add nem element to store in the current index
  this.store[this.length] = num
  // increase length
  this.length++
  // return new length
  return this.length
}

Stack.prototype.pop = function () {
  // if store is empty return undefined
  if (this.length === 0) return undefined;
  else {
    // save element to be deleted
    let popped = this.store[this.length - 1]
    // if the saved element is the max value
    if (popped === this.max.val) {
      // reset max to the initial pointer (-infinity)
      this.resetMax()
    }
    // delete the last element in the store
    delete this.store[this.length - 1]
    // set new max value
    this.setNewMax()
  }
  // decrease the length of the stack
  this.length -= 1
  // return deleted element
  return popped
}

Stack.prototype.getMax = function () {
  // if the stack is empty, return undefined
  // else return the current max value
  return this.length === 0
    ? undefined
    : this.max.val
}

module.exports = Stack;
