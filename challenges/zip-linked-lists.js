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
  //create new linked list to store the zipped ones- i dont think my methodology is allowing for every other one
  let l3 = new Node()
  let prev = l3;
  //while they are both not null
  while (l1 && l2) {
    //if l1 is less than the l2value
    if (l1.value <= l2.value) { 
      prev.next = l1;
      l1 =l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next
    }
    prev = prev.next;
  }

  // at the end of the list
  if (!l1) {prev.next = l2};
  if (!l2) {prev.next = l1};
  //return the total new linked list
  return l3.next;
};


// Node zip(l1, l2) {
//   if (l1 == null) return l2;
//   if (l2 == null) return l1;

//   Node head;
//   if (l1.data < l2.data) {
//     head = l1;
//   } else {
//     head = l2;
//     l2 = l1;
//     l1 = head;
//   }
//   while(l1.next != null) {
//     if (l1.next.data > l2.data) {
//       Node tmp = l1.next;
//       l1.next = l2;
//       l2 = tmp;
//     }
//     l1 = l1.next;
//   } 
//   l1.next = l2;
//   return head;
// }

module.exports = {Node: Node, zip: zip};
