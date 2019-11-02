/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  const obj = {};
  let length = 0;
  let largestNum = 0;
}
  //push
  Stack.prototype.push = (value) => {
    obj[length] = value;
    length += 1;
    return obj.length;
  }
  //pop
  Stack.prototype.pop = () =>{
    if (length === 0) return undefined;
    let lastElement = obj[length-1];
    delete obj[length-1];
    return lastElement;
  }
  //getMax
  Stack.prototype.getMax = () =>{
    for (let i=0; i<length; i++){
      if (obj[i]> largestNum){
        largestNum = obj[i];
      }
    }
    return largestNum;
  }

module.exports = Stack;