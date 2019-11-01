/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;

}
function zip(l1, l2) {
if(l1===undefined || l1===null){return l2;}
if(l2===undefined || l2==null){ return l1;}
// let result;

let current1=l1;
let current2=l2; //deep copy
// let switch1=true; //0 for 1, false for 2's turn to add
// result=new Node(l1.value);
// current1=current1.next;
// switch1=!switch1;
// console.log(switch1);
  //linkedList l1 and l2
  
  while(current1.next!==null && current1.next!==undefined  && current2.next!==null){
    let temp=current1.next; //the rest of the chain is now detached and dereferenced temporarily
    console.log(temp);
    current1.next=current2; ///sliding windows..
    console.log(current1.next);
    current1.next.next=temp; //rereferencing
    console.log(current1.next.next);
    current1=temp;//not current1.next, but instead it is the temp that was now at the end of the chain
    console.log(current1);
    current2=current2.next; //this chain slides acrossss
    console.log(current2);
      // if(switch1){
      //     //add 1
      //     result.next=new Node(current1.value);
      //     current1=current1.next;
      //     console.log(result.next.value);
      //     switch1=!switch1;//flip switch

      // }else{
      //   //add 2
      //   result.next=new Node(current2.value)
      //   current2=current2.next;
      //   console.log(result.next.value);
      //   switch1=!switch1;//flip switch

      // }

  }
// while(current1.next!==null){
//   result.next=new Node(current1.value);
//   current1=current1.next; //next node
// }
// while(current2.next){
//   result.next=new Node(current2.value);
//   current2=current2.next;
// }

  return l1;

};

module.exports = {Node: Node, zip: zip};
let l1=new Node(5);
l1.next=new Node(4);
l1.next.next=new Node(3);

let l2=new Node(8);
l2.next=new Node(7);
l2.next.next=new Node(6);

console.log(zip(l1,l2));
