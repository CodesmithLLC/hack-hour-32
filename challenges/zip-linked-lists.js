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
  if (!l1.value) return 'Please enter two valid link list arguments.';
  console.log('hit');
  let curNodeList1 = l1;
  let curNodeList2 = l2;
  
  let currentlyOnList1 = true;
  
  // while (l2.next !== null) {

  //   heldList1 = curNodeList1.next;
  //   curNodeList1.next = curNodeList2;
  //   heldList2 = curNodeList2.next;
  //   curNodeList2 = heldList1;

  //   heldList1 = heldList1.next;
  //   heldList1.next = heldList2;
  //   heldList2 = heldList2.next;
  //   heldList2 = heldList1;
  //   currentlyOnList1 = true;

  //   console.log(l1);
  // }

  

  return l1;
};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const m = new Node('M');
const n = new Node('N');
const o = new Node('O');
const p = new Node('P');
const q = new Node('Q');

m.next = n;
n.next = o;
o.next = p;
p.next = q;

console.log(zip(a, m));

module.exports = {Node: Node, zip: zip};

// fellow approach

// /* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
//  * the first node of the first argument, if it exists.
//  *
//  * BONUS: Do this in place
//  */
//  // The overall strategy is to "concatonate" L2 onto L1.  
//  function zip (l1, l2) {
//   // if either parameter is left undefined, return the other list. 
//   if (!l1) return l2;
//   if (!l2) return l1;
//   // initiate a head - this is what we'll return at the end, so it starts with L1
//   // initiate a temp - this is going to be our placeholder for L1 as we traverse. 
//   let head = l1;
//   let temp = l1;
  
//   // Since HEAD has the value of L1 already, we set the value of L1 to L1.NEXT
//   l1 = l1.next;
  
//   // Initiate a WHILE loop that checks to see if L2 && L1 (which again, is L1.NEXT) are ever falsey.
//   while (l2 && l1) {
// // console.log(`HEAD is `, head);
//   // console.log(`temp is `, temp, ' l1 is ', l1, ' and l2 is ', l2)
//     temp.next = l2;
//     l2 = l2.next;
//     temp = temp.next;
//     temp.next = l1;
//     l1 = l1.next;
//     temp = temp.next;
//   }
  
//   temp.next = l2 ? l2 : l1;
//   return head;
// }
// // Recursive
// function zip2 (l1, l2) {
//   if (!l1) return l2;
//   if (!l2) return l1;
  
//   let curr = new Node(l1.value);
//   curr.next = zip2(l2, l1.next);
//   return curr;
// }
// function Node(val) {
//   this.value = val;
//   this.next = null;
// }
// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// const x = new Node(4);
// const y = new Node(5);
// const z = new Node(6);
// a.next = b;
// b.next = c;
// x.next = y;
// y.next = z;
// console.log(zip(a,x));
// // console.log(a.next.next.next.next.next);