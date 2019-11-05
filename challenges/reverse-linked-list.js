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
    let previous = null;
    let current = head;
    let following = head;
    while (current !== null) {
        following = following.next;
        current.next = previous;
        previous = current;
        current = following;
    }
    return previous;
}

const testHead = new Node(1);
testHead.next = new Node(2);
testHead.next.next = new Node(3);

console.log(reverseLinkedList(testHead))

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
