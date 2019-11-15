/*

Create a Stack, and then build a Queue that utilizes two Stacks. 
The Stack constructor should contain a push, pop, shift, and unshift method.
    => BONUS: Do not use native javascript array methods. 
The Queue constructor should contain "enqueue" and "dequeue" methods that make elements follow the First In, First Out rule. 

 */

 //Build a Stack constructor function. 
 function Stack(){

  this.stack = {};
  this.length = 0;

  this.pop = () => {
    let popped = this.stack[this.length -1]; 
    delete this.stack[this.length -1]
    this.length --;
    return popped;
  };

  this.push = (val) => {
    this.stack[this.length] = val;
    this.length ++;
    return this.length;
  };

  this.shift = () => {
    let shifted = this.stack[0];
 
    for (let i = 0; i < this.length; i++){
      this.stack[i] = this.stack[i+1]
    }

    delete this.stack[this.length-1];
    this.length --;
    return shifted;

  }

  this.unshift = (val) => {
    
  
    for (let i = this.length; i > 0; i--){
      this.stack[i] = this.stack[i-1];
    
    }
    
    this.stack[0] = val;
    this.length ++;
    return this.length;

   }
 };



 //Build a Queue constructor function that uses two Stacks. 
function Queue(){

  this.inStack = new Stack();
  this.outStack = new Stack(); 

  this.enqueue = (val) => {
    this.inStack.unshift(val)
  }

  this.dequeue = () =>{
   if (this.inStack.length){
     for (let i = 0; i < this.inStack.length-1; i++){
      this.outStack.unshift(this.inStack.pop())
     }
   }

   return this.outStack.pop();
  }
}

// Tests! 

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
// console.log(myQueue);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
