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
  // assign the passed in head arg and assign it to this.head to know where to start
  let curNode = head;
  // iterate through the whole list, keeping a count of how many nodes exist
  let nodeCount = 1;
  while (curNode.next !== null) {
    nodeCount++
    curNode = curNode.next;
  }
  // the nodeCount minus k will point to the index of the node that is specified
  let specifiedNodeIndex = nodeCount - k;
  console.log(specifiedNodeIndex);
  
  // iterate through the node again, counting each step; 
  // once the step count matches the specifiedNodeIndex, you are at the specified node; return its value
  let findIt = head;
  let i = 0;
  while (findIt !== null) {
    if (i === specifiedNodeIndex) {
      // console.log(i)
      // console.log(specifiedNodeIndex)
      return findIt.value;
    }
    i++
    findIt = findIt.next;
  }
}
  



module.exports = {Node: Node, kthToLastNode: kthToLastNode};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(a);

console.log(kthToLastNode(2, a)); // should return 'D'