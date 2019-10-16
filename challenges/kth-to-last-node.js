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
//k is the interger from the end of the list. We want the value of it
//head refers to the first node
// a single list is a object of objects that points to each other using the "this.next"
//How do we find the node we are in is the last? this.next === null
//we would need to tranverse the nodes: using recursion?
function kthToLastNode(k, head, count = 0) {
    let position = head;
    let length = 1;
    while (position.next) {
        position = position.next;
        length++;
    }

    let incrementedCount = count++;

    if (length === k) {
        return head.value;
    } else {
        return kthToLastNode(k, head.next, incrementedCount)
    }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
