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
  if (!head.next) return head;
  const arr = [];
  while (head) {
    arr.push(head.value);
    head = head.next;
  }
  let headNode = new Node (arr[arr.length - 1]);
  let temp = headNode;
  for (let i = arr.length - 2; i >= 0; i -= 1) {
    let node = new Node (arr[i]);
    temp.next = node;
    temp = temp.next;
  }
  return headNode;
}

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);

// a.next = b;
// b.next = c;

// console.log(a)
// console.log(reverseLinkedList(a))

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
