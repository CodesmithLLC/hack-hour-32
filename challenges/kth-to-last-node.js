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

// function LinkedList() {
//   this.head = null;
//   this.next = null;
// }


function kthToLastNode(k, head) {
  // assign the passed in head arg and assign it to this.head to know where to start
  let curNode = head;
  
  // iterate through the whole list, keeping a count of how many nodes exist
  let nodeCount = 1;
  while (curNode.next !== null) {
    curNode.index = 0;
    nodeCount++
    curNode = curNode.next;
  }
  // the nodeCount minus k will point to the index of the node that is specified
  let specifiedNodeIndex = nodeCount - k;

  let findIt = head;
  while (findIt !== null) {
    if (findIt.index === specifiedNodeIndex) {
      return findIt.value;
    }
    findIt = findIt.next;
  }
}
  



module.exports = {Node: Node, kthToLastNode: kthToLastNode};

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// const list = new LinkedList;
// list.add(a);
// list.add(b);
// list.add(c);
// list.add(d);
// list.add(e);
// console.log(list);

kthToLastNode(2, a); // should return 'D'