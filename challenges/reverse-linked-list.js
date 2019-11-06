/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  let lead;
  let follow = null; 
  let curr = head;


  while (curr) {
	lead = curr.next;
	curr.next = follow;
	follow = curr;
	curr = lead;
  }

  // Assign head to follow, which will point to the first element after loop
  head = follow;

  return head;

}


  /*
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(reverseLinkedList(a));
*/

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
