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

function llLength(head) {
  let count = 0;
  let current = head;
  while (current !== null) {
    count += 1;
    current = current.next;
  }
  return count;
}

function kthToLastNode(k, head) {
  // k indicates how many value to before the last node in the list
  // next node = this.next 
  let length = llLength(head);
  let current = head;
  let count = 0;
  console.log(length);
  // while 5 is > 3
  while (count !== length - k) {
    current = current.next;
    // console.log(nextNode);
    count += 1;
  }
  return current;
  // store this.next in a current node variable and apply this.next again to traverse
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
console.log(llLength(a));
console.log(kthToLastNode(2, a)); // -> returns 'D' (the value on the second to last node)

// console.log(e);
module.exports = { Node: Node, kthToLastNode: kthToLastNode };
