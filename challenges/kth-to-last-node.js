/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.


 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

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
  let currNode = head
  let startNode = head
  let count = 0

  while(currNode.next !== null){
    currNode = currNode.next
    count = count + 1
  }
  
  while(count > (k-1)){
    startNode = startNode.next
    count = count - 1
  }

return startNode.value
  }
console.log(kthToLastNode(2, a))

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
