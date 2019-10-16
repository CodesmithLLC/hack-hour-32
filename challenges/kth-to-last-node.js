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

function kthToLastNode(k, head) {
  let iterator = head, list = [];
  // push nodes into list[]
  while (iterator) { // while iterator !==null
    list.push(iterator); // push node into list[]
    iterator = iterator.next; // iterator = next node
  }

  if (k === list.length) return list[0].value;  // k=== list.length, return head's value
  if (k === 0) return list[list.length - 1].value; // if k===0, return tail's value

  // console.log(list) // list of nodes
  for (let i = list.length - 1; i > 0; i--) {
    // console.log(list[i])
    // return kth to last node
    if (i === k) return list[list.length - k].value;
  }


}

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// // list [A,B,C,D,E]
// console.log('Expect this to be E: ', kthToLastNode(0, a) === 'E') // true
// console.log('Expect this to be D: ', kthToLastNode(2, a) === 'D') // true
// console.log('Expect this to be A: ', kthToLastNode(5, a) === 'A') // true
// console.log('Expect this to be C: ', kthToLastNode(3, a) === 'C') // true

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
