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
	let previous;
	current.previous = null;

	while (current.next) {
		previous = current;
		current = current.next;
		current.previous = previous;
	}

	let reversedHead = current;

	while (current.previous) {
		current.next = current.previous;
		current = current.previous;
	}

	current.next = null;

	return reversedHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
