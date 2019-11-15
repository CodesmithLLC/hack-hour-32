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

function reverseLinkedList(L1) {
  let L2 = {};

  L2 = L1.next.next

  let temp = L1.next;
  temp.next = null;
  console.log(temp);

  L2.next = temp;

  temp = L1;
  temp.next = null;
  console.log(temp);

  L2.next.next = temp;

  return L2
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
