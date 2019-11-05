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
    let pointer = head;
    let newHead;
    let tracker;
    while (pointer) {
        if (pointer.next === null) {
            newHead = pointer;
            tracker = pointer;
        }
        pointer = pointer.next;
    }
    pointer = head;
    while (head.next !== null) {
        if (pointer.next === tracker) {
            tracker.next = pointer;
            tracker = tracker.next;
            pointer = head;
            if (tracker === head) {
                head.next = null;
            }
        } else {
            pointer = pointer.next;
        }
    }
    return newHead;
}

const link1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
          value: 4,
          next: null,
      }
    }
  }
}

console.log(reverseLinkedList(link1));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
