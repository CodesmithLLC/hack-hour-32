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
  console.log(head)
  let current = head

  console.log(current)
  let length = 0;
  console.log(head.value)
  while (current) {
    console.log('works')
    length++
    console.log(head.value)
    current = current.next
  }
  // console.log(head)
  current = head
  let counter = 0
  console.log(length)
  let index = length - k
  console.log(index)
  console.log(head)
  // while (counter < index && this.head !== null) {
  //   console.log(current)
  //   current = current.next
  //   console.log(current)
  //   counter++
  // }
  for (let i = 0; i < index; i++) {
    console.log(current)
    current = current.next
    console.log(current)
  }
  console.log(current.value)
  return current.value




  console.log(current.value)

  
  
   

  



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
console.log(a)
  



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
