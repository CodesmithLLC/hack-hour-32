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
 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

//  TEST CONDITION BEGINS

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
let resultArray = [];
let currentNode = head.next;
while (currentNode) {
  // console.log(currentNode)
  resultArray.push(currentNode.value)
  currentNode = currentNode.next
}
 return resultArray[resultArray.length - k]
}

console.log(kthToLastNode(2,a))

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
