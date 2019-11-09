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
	let prev;
	current.prev = null;

	while (current.next) {
		prev = current;
		current = current.next;
		current.prev = prev;
	}

	let reversedHead = current;

	while (current.prev) {
		current.next = current.prev;
		current = current.prev;
	}

	current.next = null;

	return reversedHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
