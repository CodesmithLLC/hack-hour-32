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
    let trailingNode = head;
    let middleNode = head.next;
    let aheadNode = middleNode.next;
    trailingNode.next = null;

    while (middleNode) {
        middleNode.next = trailingNode;
        trailingNode = middleNode;
        if (!aheadNode) return middleNode;
        else {
            middleNode = aheadNode;
            aheadNode = aheadNode.next;
        }
    }
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
