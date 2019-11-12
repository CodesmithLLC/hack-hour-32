/**
 * Create a stack.Then create a queue using two stacks.
 */
//stack LIFO, quen FIFO

function Stack() {
    this.storage = {}; //the contents in the storate is an object
    this.index = 0; //we will return stacks from the last index and index--, length is irrelevant for a stack
}
Stack.prototype.push = function(value) {
    //adding a value to the stack, 
    //ues of post incrementor for index since we are not tracking length
    //take into account value undefined
    this.storage[this.index++]=value;
    return;
  };
  
  Stack.prototype.pop = function() {
    if(this.index===0){
      return;
    }
    return this.storage[--this.index]; //first access element at index then decrement
  };


/**
* Queue Class
*/

function Queue() {
    // this.storage=[];
    // this.index=0; //a queue is a reverse stack
this.top=new Stack();
this.bot=new Stack(); //we must shift the queu by putting the last elemen
    //technically we can go "backwards because of FIFO, the user doesn't need to know"
}

Queue.prototype.enqueue = function(value) {
    //adds the value to 
    // //we are alays adding to the index, but to the begining 
    // //we do not track the length
    // //we
    // this.storage[this.index++]=value;
    // return;
   if(this.top.index===0){
       this.top.push(value);
   }
   else{ this.bot.push(value)}
};

Queue.prototype.dequeue = function() {

    // if(this.storage===undefined || this.index===0){
    //     return;
    // }
    // //this.index-this.index
    // return this.storage.shift();
  
    if(this.top.index===0){
        //nothing left on top of stack, only add to the first top stack
        this.top.push(value);
    }
    else{
        //pop off 
        let head=this.top.pop();
        while(this.bot){
            this.top.push(this.bot.pop()); //pop onto top array
        }
        //then add element 
        
        // this.bot.push(value);
        let newHead=this.top.pop(); //since we have poped all of bottom elements to top, the next element is at top of top for fifo
        while(this.top){
            this.bot.push(this.top.pop());//push back in correct order
        }
        this.top.push(newHead);

        return head;
    }
};

module.exports = {Stack: Stack, Queue: Queue};
