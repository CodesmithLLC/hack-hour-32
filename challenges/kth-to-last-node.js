/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const  = new Node('A');
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
  let length = 1; // 5
  let currentNode = head; 
  while (currentNode.next) { 
    length++; 
    currentNode = currentNode.next; 
  }  
  let targetIndex = length - k + 1; 
  let targetNode;
  currentNode = head; 
  for (let i = 0; i < targetIndex; i++) { 
    targetNode = currentNode; 
    currentNode = currentNode.next; 
  }
  return targetNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};


