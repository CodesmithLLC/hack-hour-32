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
<<<<<<< HEAD
function zip(l1, l2) {
  if (!l1 && !l2) return undefined;
  if (!l1) return l2;
  if (!l2) return l1;
  const head = l1;
  let newl1 = l1.next
  let newl2 = l2.next
  // let ll1 = l1;
  // let ll2 = l2;
  while (newl1 && newl2) {
    l1.next = l2;
    l1 = newl1
    l2.next = newl1;
    l2 = newl2;
    // if(newl1 !== null) newl1 = newl1.next;
    // if(newl2 !== null) newl2 = newl2.next;
    newl1 = newl1.next;
    newl2 = newl2.next;
  }
  // if (newl2 === l1){
  //   return ll2;
  // }else{
  //   return ll1;
  // }
  // console.log(l1.value);
  return head;
}
let a = new Node(1);
a.next = new Node(3);

let b = new Node(2);
b.next = new Node(4);
b.next.next = new Node(6);

let c = zip(a,b);
for(let i = c;i !== null; i = i.next){
  console.log(i.value);
}

module.exports = {Node: Node, zip: zip};
=======

function zip(l1, l2) {
};

module.exports = {Node: Node, zip: zip};
>>>>>>> fbfa727fdbcdb43593ee58d05e8309d7a1ae5fac
