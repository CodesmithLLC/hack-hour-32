/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// O(n) time, O(n) space
function kthToLastNode(k, head) {
  // create empty stack to push elements to
  let stack = [];
  //traverse through linked list
  while(head){
    //push all nodes to a stack
    stack.push(head.value);
    // traverse to the next node in LinkedList
    head = head.next
  }

  //return element
  return stack[stack.length-k];
}

// O(n) time, O(1) space
function kthToLastNode(k, head){
  // set a lead and follow pointer
  let lead = head;
  let follow = head;

  // set lead k steps ahead of follow pointer
  for (let i = 0; i < k && lead; i++){
    lead = lead.next;
  }

  // go to end of linked list with follow pointer trailing lead pointer
  while(lead){
    lead = lead.next;
    follow = follow.next;
  }
  // follow pointer stops at the kth to last node, return value
  return follow.value;
}
 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;

console.log(kthToLastNode(2, a));
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
