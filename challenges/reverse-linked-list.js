/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

// function reverseLinkedList(head) {
//   if (!head || !head.next) return head;

//   let temp = reverseLinkedList(head.next);
//   console.log(temp);
//   head.next.next = head;
//   console.log(head.next.next);
//   head.next = undefined;
//   return temp;
// }

function reverseLinkedList(head) {
    let curNode = head;
    let previous;
  
    while(curNode) {
      // save rest of linkedList
      let save = curNode.next;
      // reverse pointer
      curNode.next = previous;
      // re-assign previous to curNode
      previous = curNode;
      // increment node to next node or null at end of list
      curNode = save;
    }
    return previous;   // Change the list head !!!
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

console.log(reverseLinkedList(a));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
