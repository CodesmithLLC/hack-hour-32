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

function reverseLinkedList(head) {
  let current = head;
  if (head.next) {
    current = head;
    head = head.next;
  }
  let newList = new Node(head.value);
  newList.next = current;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
