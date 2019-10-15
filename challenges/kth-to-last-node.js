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

function kthToLastNode(k, head, nodes = []) {

  const current = head;
  nodes.push(current);

  const kTarget = nodes.length - k;
  

  // BASE CASE
  if (!current.next) return nodes[kTarget].value;  

  return kthToLastNode(k, current.next, nodes);

}

  /*** TEST ***/

  /*
function ll() {
  this.head = null;
  this.tail = null;
}

ll.prototype.add = function(value) {
  if (!this.head) {
	this.head = this.tail = new Node(value);
	return;
  }

  this.tail.next = new Node(value);
  this.tail = this.tail.next;
}


const list = new ll(5);
list.add(2);
list.add(7);
list.add(3);
list.add(6);
console.log(kthToLastNode(1,list.head));

*/


module.exports = {Node: Node, kthToLastNode: kthToLastNode};


