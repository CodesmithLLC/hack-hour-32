
 // * Write a function that takes two parameters, an integer and the head of a
 // * singly linked list, and returns the VALUE on the kth to last node in the list.
 // *
 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');
 const f = new Node('F');
 const g = new Node('G');
 const h = new Node('H');
 const i = new Node('I');
 const j = new Node('J');
 const k = new Node('K');
 const l = new Node('L');
 const m = new Node('M');





 // *
 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 e.next = f;
 f.next = g;
 g.next = h;
 h.next = i;
 i.next = j;
 j.next = k;
 k.next = l;
 l.next = m;




 // *
 // * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 // */

function Node(val) {
  this.value = val;
  this.next = null;
}

// console.log(a);

function kthToLastNode(k, head) {
  //base case - total number of nodes - k is the number of jumps to make
  let current = head;
  let counter = 2;
  while (current.next !== null) {
    counter += 1;
    current = current.next;
  }
  let jumps = counter - k;
  let output;
  current = head;
  while (jumps !== 0) {
    output = current.value;
    current = current.next;
    jumps = jumps - 1;
  }
  return output;
  // if (k === 0) return head.value;
  // return kthToLastNode(k - 1, head.next);
}

console.log(kthToLastNode(4, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
