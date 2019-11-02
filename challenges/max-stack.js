/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */


function Stack() {
  this.storage = {}; //the contents in the storate is an object O(1) access
  this.index = 0; //we will return stacks from the last index and index--, length is irrelevant for a stack
}

Stack.prototype.push = function(value) {
  //adding a value to the stack, 
  //ues of post incrementor for index since we are not tracking length
  //take into account value undefined
  this.storage[this.index++]=value;
  return this.index+1;
};

Stack.prototype.pop = function() {
  if(this.index===0){
    return;
  }
  return this.storage[--this.index]; //first access element at index then decrement
};

Stack.prototype.getMax(){
    let keys=Object.keys(this.storage);
    if(keys===undefined || keys.length===0){ return;}
    let maxValue=this.storage[keys[0]];
    for(let i=0;i<keys.length;i++){
          if(this.storage[keys[i]]>maxValue){
            maxValue=this.storage[keys[i]];
          }
    } //I think the get it in O(1) we make the values the keys, and if the keys are theoretically auto sorted, we take the last one


    let values=Object.values(this.storage);
    values.sort();
    return values[values.length-1];
    return maxValue;
}


module.exports = Stack;