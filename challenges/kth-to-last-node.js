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
  // Tally keeps track of how many times we've recursed.
  let tally = 0;
  // Count returns how many nodes are in the link list.
  let count = 0;

  // Increments count for every node in the link list.
  function countNodes(head) {
    count++
    console.log(count);
    console.log(head.next);
    if (head.next) {
      countNodes(head.next);
    }
    return count;
  }

  // Recurses through the link list count - k number of times then returns the value.
  function recurse(node) {
    console.log(tally);
    console.log(count - k)
    if (tally === count - k) {
      console.log(node.value)
      return node.value;
    } else {
      tally++;
      console.log(node.value)
      return recurse(node.next);
    }
  }

  // Find the number of nodes.
  countNodes(head);
  // Recurse.
  return recurse(head);
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


console.log(kthToLastNode(2, a))



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
