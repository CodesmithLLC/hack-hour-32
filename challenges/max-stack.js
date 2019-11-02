/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let stack = {};
  stack.index = 0;
  stack.max = 0;
  stack.oldMax = 0;
  const push = (val) => {
      const key = stack.index;
      stack[key] = val;
      if (key === 0) {
          stack.index += 1;
          stack.max = stack[key];
          return stack.index;
      }
      stack.index += 1;
      if (stack[key] > stack[key - 1]) {
          stack.oldMax = stack.max;
          stack.max = stack[key]
      } else {
          stack.oldMax = stack.max;
          stack.max = stack[key - 1];
      }
      return stack.index;
  }
  stack.push = push;

  const pop = () => {
      const ele = stack[stack.index - 1];
      delete stack[stack.index - 1];
      if (stack.index !== 0) {
          stack.index -= 1;
      }
      if (ele === stack.max) {
          stack.max = stack.oldMax;
      }
      return ele;
  }
  stack.pop = pop;

  const getMax = () => {
      return stack.max;
  }
  stack.getMax = getMax;

  return stack;
}

const test = Stack();



module.exports = Stack;
